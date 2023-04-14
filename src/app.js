const express = require('express')
const app = express();

const fs = require('fs')

const cors = require('cors')

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(bodyParser.json()); //parse appilcation/json data
app.use(urlencodedParser); //Check insert user.
app.use(cors())

app.use(function (req, res) {
    console.log(req.url)
})

app.get('/',(req,res)=>{
    console.log(req)
    res.status(200).end()
})

module.exports = app