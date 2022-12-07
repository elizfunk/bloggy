const express = require('express')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const keys = require('./config/keys')

const app = express()

const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000

app.use(bodyParser.json())
app.use(
  cookieSession({
    name: 'session',
    maxAge: THIRTY_DAYS,
    keys: [keys.cookieKey],
  }),
)

require('./routes/authRoutes')(app)
require('./routes/dashboardRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  // Serve up production assets like main.js and main.css
  app.use(express.static('client/build'))

  // Express will serve up the index.html file if the route isn't recognized
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.get('*', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
