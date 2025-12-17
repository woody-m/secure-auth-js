import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho do banco fora do src
const dbPath = path.join(__dirname, '../../../database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Erro ao conectar no banco de dados', err.message);
  } else {
    console.log('🗄️ Banco de dados SQLite conectado');
  }
});

export default db;

