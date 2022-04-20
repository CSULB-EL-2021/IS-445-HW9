const express = require('express')
const path = require("path");
const app = express()
const port = 3000

const articles = []
const getView = (view_name) => {
    return path.join(__dirname, 'views', view_name)
}

app.use(express.json())

app.get('/', (_, res) => {
  res.sendFile(getView('index.html'))
})

app.get('/ex1', (_, res) => {
  res.sendFile(getView('ex1.html'))
})
app.post('/ex1', (req, res) => {
  const { name, email } = req.body

  res.send({
    status: 'ok',
    message: `${name}, Thank you for your order. We will keep you posted on delivery status at ${email}.`
  })
})

app.get('/ex2', (_, res) => {
  res.sendFile(getView('ex2.html'))
})
app.post('/api/countries', (req, res) => {
  const { name, countries } = req.body

  res.send({
    status: 'ok',
    message: `Your name is ${name} and you visited ${countries.length} countries. Keep traveling!`
  })
})

app.get('/ex3', (_, res) => {
  res.sendFile(getView('ex3.html'))
})
app.post('/articles', (req, res) => {
  const { title, content } = req.body

  const id = articles.length + 1
  articles.push({id, title, content})

  res.send({
    status: 'ok',
    message: `New article added successfully with title "${title}" and ID ${id}.`
  })
})

app.use('/public', express.static('public'))
app.use('/css', express.static('css'))

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
