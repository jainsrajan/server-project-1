require('dotenv') .config();
const express = require('express')
const app = express()
const connecttodb = require('./db.js');


app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userRouter = require('./routes/routes.js')
app.use ('/' , userRouter)
connecttodb()

module.exports = app;                          