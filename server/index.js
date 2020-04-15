const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

var corsOptions = {origin: '*', optionsSuccessStatus: 200,}
const app = express();
app.use(cors(corsOptions))
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    fs.readFile("data/todos.json", "utf8", function(err, data) {
        if (err) {
            return res.json(err);
        }
        return res.json(data)
    });
})

app.post('/todos', (req, res) => {
    fs.appendFile("data/products.json", "utf8", function(err, data) {
        if (err) {
            return res.json(err);
        }
        return res.json(data)
    });
})


app.listen(3001, () => {
    console.log("App running on the port 3001");
})