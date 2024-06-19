export const getRootHendler = (req, res) => {
  res.render('root.ejs', { title: 'Home', message: 'Welcome to the Root Route!!!' })
}
