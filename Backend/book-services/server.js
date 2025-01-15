// Imports et const
const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=process.env.port||3000
const controller=require("./controller/controller.js")
const router = express.Router()
const db=require("./db/db.js")
// Création de node js server
app.use(express.json())
app.use(cors())
app.use("/", controller)
app.use(bodyParser.urlencoded({extended:true}))
app.listen(port,(err)=>console.log(`Server is running on port : ${port}`))
