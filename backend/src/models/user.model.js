import db from '../config/database.js';

export function createUserTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.run(query, (err) => {
    if (err) {
      console.error('❌ Erro ao criar tabela users', err.message);
    } else {
      console.log('✅ Tabela users pronta');
    }
  });
}

