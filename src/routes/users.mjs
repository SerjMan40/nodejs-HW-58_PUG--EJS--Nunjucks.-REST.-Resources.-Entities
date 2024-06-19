import express from 'express'
import {
  deleteUserOnIdHandler,
  getUserOnIdHandler,
  getUsersHandler,
  postUserHandler,
  putUserOnIdHandler
} from '../controllers/users.mjs'
import authenticate from '../middlewares/authenticate.mjs'
import validateUserInput from '../middlewares/validateUserInput.mjs'

const usersRouter = express.Router()

usersRouter.get('/', /*authenticate,*/ getUsersHandler)
usersRouter.post('/',/* validateUserInput, authenticate,*/ postUserHandler)

usersRouter.get('/:userId', /*authenticate,*/ getUserOnIdHandler)
usersRouter.put('/:userId', /*authenticate,*/ putUserOnIdHandler)
usersRouter.delete('/:userId', /*authenticate,*/ deleteUserOnIdHandler)

export default usersRouter
