export function getProfile(req, res) {
  return res.status(200).json({
    message: 'Acesso autorizado',
    user: req.user,
  });
}

