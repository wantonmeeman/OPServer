const express = require('express')
const app = express();

const path = require('path')//Express considers relative paths to be bad, so we resolve before hand

const fs = require('fs')

const cors = require('cors')

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname+"/frontEnd"));//This makes it so the root is /OPServer

app.use(bodyParser.json()); //parse appilcation/json data
app.use(urlencodedParser); //Check insert user.
app.use(cors())


app.get('/home', (req, res) => {
    console.log(__dirname)
    res.sendFile(
        //Doing this as express considers relative paths to be bad.
        //Resolve this by either the above 
        //path.resolve("../../static/homepage.html")
        //or specify the root path to parent directory
        //Starts from index.js
        __dirname+"/frontEnd/static/homepage.html"
    )
})

app.post('/repeat/:string', (req, res) => {
    console.log(req.params)
    res.status(200).send(req.params.string)
})

app.put('/', (req, res) => {
    console.log(req)
    res.status(200).end()
})

app.delete('/', (req, res) => {
    console.log(req)
    res.status(200).end()
})


module.exports = app