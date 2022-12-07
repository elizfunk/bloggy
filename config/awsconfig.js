if (process.env.NODE_ENV === 'production') {
  module.exports = require('./awsProd')
} else {
  module.exports = require('./awsDev')
}
