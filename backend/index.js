const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI,)
    .then(() => console.log("Соединение с базой данных установлено"))
    .catch(err => console.error("Ошибка подключения к базе данных:", err));

const routes = require('./routes/routes');

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "*",
}));




const port = process.env.PORT || 5000;
app.use('/api', routes);


server.listen(port, '192.168.0.100');




