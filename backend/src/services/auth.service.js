import bcrypt from 'bcrypt';
import db from '../config/database.js';

const SALT_ROUNDS = 10;

export function registerUser({ email, password }) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!email || !password) {
        return reject({ status: 400, message: 'Dados inválidos' });
      }

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const query = `
        INSERT INTO users (email, password)
        VALUES (?, ?)
      `;

      db.run(query, [email, hashedPassword], function (err) {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return reject({ status: 409, message: 'Usuário já existe' });
          }
          return reject({ status: 500, message: 'Erro ao criar usuário' });
        }

        resolve({
          id: this.lastID,
          email
        });
      });
    } catch (error) {
      reject({ status: 500, message: 'Erro interno' });
    }
  });
}

