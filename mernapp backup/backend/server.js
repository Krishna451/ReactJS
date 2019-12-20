const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
mongoose = require('mongoose')
config = require('./config/DB');

const postroutes = require('./routes/PostRoute');

//The router will be added as a middleware and will take control of request starting with path /posts:
app.use('/posts', postroutes);


mongoose.connect(config.DB).then(
() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database'+ err)}
);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});