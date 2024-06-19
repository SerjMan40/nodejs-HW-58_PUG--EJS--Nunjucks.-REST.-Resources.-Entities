import users from '../data/usersData.mjs'

export const getUsersHandler = (req, res) => {
  res.render('users/users.pug', { users })
}

export const postUserHandler = (req, res) => {
  const { name, password } = req.body
  const newUser = {
    id: users.length + 1,
    name,
    password
  }
  users.push(newUser)
  res.status(201).send(`User ${name} created`)
}

export const getUserOnIdHandler = (req, res) => {
  const userId = parseInt(req.params.userId)
  const user = users.find((user) => user.id === userId)
  if (user) {
    res.render('users/userDetail.pug', { user })
  } else {
    res.status(404).send(`User with ID ${userId} not found`)
  }
}

export const putUserOnIdHandler = (req, res) => {
  const userId = parseInt(req.params.userId)
  const { name, password } = req.body
  const index = users.findIndex((user) => user.id === userId)
  if (index !== -1) {
    users[index].name = name
    users[index].password = password
    res.send(`User: ${name}, with ID: ${userId} is updated!!!`)
  } else {
    res.status(404).send(`User with ID ${userId} not found`)
  }
}

export const deleteUserOnIdHandler = (req, res) => {
  const userId = parseInt(req.params.userId)
  const user = users.find((user) => user.id === userId)
  const index = users.findIndex((user) => user.id === userId)
  if (index !== -1) {
    users.splice(index, 1)[0]
    res.send(`User: ${user.name}, with ID: ${userId} was deleted!`)
  } else {
    res.status(404).send(`User with ID ${userId} not found`)
  }
}
