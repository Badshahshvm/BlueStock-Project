const express = require("express")
const server = express()

const port = 2025

server.get('/signin', (req, res)=> {
    res.send("SignIn Succesfull!")
})

server.listen(port, ()=> {
  console.log("server started and running succesfully!")
})