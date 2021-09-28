const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")


exports.handler = async (event) =>{
    const response = {
        statusCode:200,
        Headers:{
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }
    }

    return response
}
app.use(cors())
app.use(bodyParser.json())
require("./Controllers/musicController")(app)


async function criarTabelas()  {
    const database = require("./Database/db")
    const playlist = require("./Models/playlists")
    
    try{
        const resultado = await database.sync()
    }catch (error){
        console.log(error)
    }   

}
criarTabelas()


var Port = process.env.PORT

if(Port == undefined){
    
    var Port = "8081"

}

app.listen(Port, () => {
    console.log("[Server]:Server listening on port " + process.env.PORT)
})