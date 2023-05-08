const express = require('express')
const res = require('express/lib/response')

//rest object
const app = express()

//rest api
app.get('/',(req,res) => {
    res.send({
        message:"Welcome to my ecommerse app"
    })
})

//PORT
const port = 8080

//run listen
app.listen(PORT,() =>{
    console.log(`server running on ${PORT}`)
})