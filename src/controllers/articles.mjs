import articles from '../data/articlesData.mjs'

export const getArticlesHandler = (req, res) => {
  res.render('articles/articles.ejs', { articles })
}

export const postArticleHandler = (req, res) => {
  const { title } = req.body
  const newArticle = {
    id: articles.length + 1,
    title: title
  }
  articles.push(newArticle)
  res.status(201).send(`The article has been added whith ID: ${newArticle.id}`)
}

export const getArticleOnIdHandler = (req, res) => {
  const articleId = parseInt(req.params.articleId)
  const article = articles.find((article) => article.id === articleId)
  if (article) {
    res.render('articles/articleDetail.ejs', { article })
  } else {
    res.status(404).send(`Article with ID ${articleId} not found`)
  }
}

export const putArticleOnIdHandler = (req, res) => {
  const articleId = parseInt(req.params.articleId)
  const { title } = req.body
  const articleIndex = articles.findIndex((article) => article.id === articleId)
  if (articleIndex !== -1) {
    articles[articleIndex].title = title
    res.status(200).send(`The article has been apdeted on ID: ${articleId}`)
  } else {
    res.status(404).send(`Article with ID ${articleId} not found`)
  }
}

export const deleteArticleOnIdHandler = (req, res) => {
  const articleId = parseInt(req.params.articleId)
  const articleIndex = articles.findIndex((article) => article.id === articleId)
  if (articleIndex !== -1) {
    articles.splice(articleIndex, 1)[0]
    res.status(200).send(`The article has been deleted on ID: ${articleId}`)
  } else {
    res.status(404).send(`Article with ID ${articleId} not found`)
  }
}
