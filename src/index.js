const express = require('express');
const dotenv = require('dotenv');

const routes = require('./routes/index');
const connectDb = require('./config/connectionDb');

dotenv.config();
const port = process.env.PORT;
const app = express();

connectDb();
app.set("view engine", "ejs");
app.set("views", __dirname + "/pages");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'))

app.use(routes);


app.listen(port, () => {
    console.log('server run in ', port);
});