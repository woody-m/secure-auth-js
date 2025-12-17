import dotenv from 'dotenv';
import app from './app.js';
import { createUserTable } from './models/user.model.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Inicializa o banco e a tabela
createUserTable();

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

