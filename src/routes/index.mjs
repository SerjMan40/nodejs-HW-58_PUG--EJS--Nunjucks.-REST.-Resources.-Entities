import express from 'express'
import rootRouter from './root.mjs'
import usersRouter from './users.mjs'
import articlesRouter from './articles.mjs'
import logRequests from '../middlewares/logRequests.mjs'
import errorHandler from '../middlewares/errorHandler.mjs'
import sessionMiddleware from '../middlewares/sessionMiddleware.mjs'

const router = express.Router()

router.use(sessionMiddleware, logRequests)

router.use('/users', usersRouter)
router.use('/articles', articlesRouter)
router.use('/', rootRouter)

router.use(errorHandler)

export default router
