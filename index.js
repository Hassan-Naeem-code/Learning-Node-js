const express = require('express');
const app = express();
const server = require('http').createServer(app);
const rider = require('./rider');
const user = require('./user');
const authUser = require('./userAuth');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use('/rider', rider);
app.use('/user', user);
app.use('/authUser', authUser);

server.listen(PORT, () => console.log("server is listening.."));