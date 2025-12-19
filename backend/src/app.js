import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.routes.js';
import profileRoutes from './routes/profile.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();

// Resolver __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho absoluto para a pasta frontend
const frontendPath = path.resolve(__dirname, '..', '..', 'frontend');

app.use(express.json());

// Rotas da API
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', profileRoutes);
app.use('/api/v1', adminRoutes);

// Servir arquivos estáticos do frontend
app.use(express.static(frontendPath));

// Rota raiz → index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

export default app;



