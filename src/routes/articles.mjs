import express from 'express'
import {
  deleteArticleOnIdHandler,
  getArticlesHandler,
  getArticleOnIdHandler,
  postArticleHandler,
  putArticleOnIdHandler
} from '../controllers/articles.mjs'
// import authenticate from '../middlewares/authenticate.mjs'

const articlesRouter = express.Router()

articlesRouter.get('/', /*authenticate,*/ getArticlesHandler)
articlesRouter.post('/',/*authenticate,*/ postArticleHandler)

articlesRouter.get('/:articleId', /*authenticate,*/ getArticleOnIdHandler)
articlesRouter.put('/:articleId', /*authenticate,*/ putArticleOnIdHandler)
articlesRouter.delete('/:articleId', /*authenticate,*/ deleteArticleOnIdHandler)

export default articlesRouter
