const keys = require('../config/keys')

module.exports = (app) => {
  app.get('/api/loginstatus', (req, res) => {
    if (req.session.user.id === keys.dashboardAdminUsername) {
      res.send({isAdmin: true})
    } else {
      res.send({isAdmin: false})
    }
  })

  app.post('/api/login', (req, res) => {
    const username = req.body.data.username
    const password = req.body.data.password
    if (
      username === keys.dashboardAdminUsername &&
      password === keys.dashboardAdminPassword
    ) {
      req.session = null
      req.session = {
        user: {
          id: username,
        },
      }
      res.send({isAdmin: true})
    } else {
      res.status(403).send('Nope.  You are not allowed.')
    }
  })

  app.get('/api/logout', (req, res) => {
    req.session = null
    res.send({isAdmin: false})
  })
}
