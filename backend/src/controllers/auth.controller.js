import { registerUser, loginUser } from '../services/auth.service.js';

// 👇 CADASTRO
export async function register(req, res) {
  try {
    const { email, password } = req.body;

    const user = await registerUser({ email, password });

    return res.status(201).json({
      message: 'Usuário criado com sucesso',
      user,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || 'Erro interno',
    });
  }
}

// 👇 LOGIN
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const { token } = await loginUser({ email, password });

    return res.status(200).json({
      token,
      expiresIn: '1h',
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || 'Erro interno',
    });
  }
}


