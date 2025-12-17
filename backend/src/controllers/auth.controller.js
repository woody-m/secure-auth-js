import { registerUser } from '../services/auth.service.js';

export async function register(req, res) {
  try {
    const { email, password } = req.body;

    const user = await registerUser({ email, password });

    return res.status(201).json({
      message: 'Usuário criado com sucesso',
      user
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || 'Erro interno'
    });
  }
}

