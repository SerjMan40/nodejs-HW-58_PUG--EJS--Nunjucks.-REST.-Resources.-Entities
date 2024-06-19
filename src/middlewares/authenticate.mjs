function authenticate(req, res, next) {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(401).send('Access denied. No credentials sent.')
  }
  next()
}

export default authenticate
