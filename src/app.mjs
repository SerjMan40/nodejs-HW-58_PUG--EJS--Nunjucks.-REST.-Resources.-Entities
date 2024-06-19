import express from 'express'
import router from './routes/index.mjs'
import path from 'path'
import { fileURLToPath } from 'url'
import ejs from 'ejs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.engine('ejs', ejs.renderFile)

const PORT = 3000

app.use(router)

app.listen(PORT, () => console.log('Server was started on port:', PORT))
