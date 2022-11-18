const keys = require('../config/keys')

module.exports = (app) => {
  app.post('/api/login', (req, res) => {
    const username = req.body.data.username
    const password = req.body.data.password
    console.log('req for login:', req)
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
    console.log('req LOGOUT ::::::::::', req.session)
    req.session = null
    console.log('after regenerate req.session:', req.session)
    res.send({isAdmin: false})
  })
}
