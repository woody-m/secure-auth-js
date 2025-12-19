import jwt from 'jsonwebtoken';
import { httpError } from '../utils/httpError.js';
export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return httpError(res, 401, 'Token não fornecido');

  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
     return httpError(res, 401, 'Token inválido ou expirado');
    }
    req.user = decoded;
    next();
  });
}


