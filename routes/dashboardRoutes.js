const awsConfig = require('../config/awsConfig')
const AWS = require('aws-sdk')
AWS.config.update(awsConfig)
const client = new AWS.DynamoDB.DocumentClient()
const tableName = 'Posts'

module.exports = (app) => {
  app.get('/api/dashboard/posts', (req, res) => {
    var params = {
      TableName: tableName,
    }

    client.scan(params, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        var items = []

        // the rows are present in the Items property
        // of the data object returned in the callback
        // extract the Name property from the rows and
        // push them into a new array
        for (var i in data.Items) items.push(data.Items[i])

        // send the obtained rows onto the response
        res.contentType = 'application/json'
        console.log('items:', items)
        res.send(items)
      }
    })
  })
}
