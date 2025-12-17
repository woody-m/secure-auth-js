import bcrypt from 'bcrypt';
import db from '../config/database.js';
import { generateToken } from '../utils/token.util.js';

const SALT_ROUNDS = 10;

// 👇 CADASTRO (OBRIGATÓRIO)
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
          email,
        });
      });
    } catch {
      reject({ status: 500, message: 'Erro interno' });
    }
  });
}

// 👇 LOGIN (O QUE VOCÊ ADICIONOU)
export function loginUser({ email, password }) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      return reject({ status: 400, message: 'Credenciais inválidas' });
    }

    const query = `SELECT * FROM users WHERE email = ?`;

    db.get(query, [email], async (err, user) => {
      if (err || !user) {
        return reject({ status: 401, message: 'Credenciais inválidas' });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return reject({ status: 401, message: 'Credenciais inválidas' });
      }

      const token = generateToken({
        id: user.id,
        role: user.role,
      });

      resolve({ token });
    });
  });
}

