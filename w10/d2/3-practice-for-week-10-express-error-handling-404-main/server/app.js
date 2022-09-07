const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.post('/error', (req, res) => {
  // attempt to create a record in our database 
  // failed and threw an error
  const data = req.body.data
  console.log(data)
  const error = new Error('database error')
  error.statusCode = 400 //invalid input
  throw error
})

app.use((req, res, next) => {
  const error = new Error("Sorry, the requested resource couldn't be found")
  error.statusCode = 404
  // next(error)
  throw error
})

app.use((err, req, res, next) => {
  if (err.statusCode === 400) {
    res.status(400)
    res.json({
      error: 'There was an issue with user input',
      message: err.message,
      errorCode: 400
    })
  }
  next(err)
})

app.use((err, req, res, next) => {
  console.log(err)
  const statusCode = err.statusCode || 500
  res.status(statusCode)
  console.log(res.status)
  res.json({
    message: err.message,
    // statusCode: statusCode
    statusCode
  })
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));