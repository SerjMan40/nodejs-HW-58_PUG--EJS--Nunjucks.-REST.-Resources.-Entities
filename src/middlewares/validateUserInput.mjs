function validateUserInput(req, res, next) {
  const { name, password } = req.body
  if (!name || !password) {
    return res.status(400).send('Missing required fields: username and password')
  }
  next()
}

export default validateUserInput
 