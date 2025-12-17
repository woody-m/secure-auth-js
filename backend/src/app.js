import express from 'express';
import authRoutes from './routes/auth.routes.js';
import profileRoutes from './routes/profile.routes.js';

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', profileRoutes);

export default app;

