const express = require('express');
const app = express();

app.use(express.json())

const peopleRouter = require('./routes/people');
const colorsRouter = require('./routes/colors');
app.use('/people', peopleRouter);
app.use('/colors', colorsRouter);

app.get('/users/test', (req, res) => {
    res.send("what's up")
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));