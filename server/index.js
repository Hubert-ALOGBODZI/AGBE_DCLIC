const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
// const bcrypt = require('bcrypt-nodejs');
const UserRoute = require("./routes/UserRoute");

const app = express();

require('dotenv').config();

mongoose.connect(process.env.URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on('error', (error) => console.log(error));

db.once('open', () =>console.log('Database Connected'));

app.use(cors());


app.use(express.json());

app.use(UserRoute);

app.listen(5000 , ()=> console.log("server up and running ..."))

