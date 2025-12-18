export function adminArea(req, res) {
  return res.status(200).json({
    message: 'Acesso administrativo autorizado',
    user: req.user,
  });
}

