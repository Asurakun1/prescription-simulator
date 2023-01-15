const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(3000, () => {
    console.log("Server has started on port 3000")
});