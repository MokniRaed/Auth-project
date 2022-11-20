const express =require("express")

const route = express.Router()

route.get('/users',function(req,res){
    response.send("<h1>Welcome to our server</h1> ")
})




route.get('/user',(req,res)=>{
    res.send("hello Chayma ❤️")
})

module.exports = route