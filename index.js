const express = require("express");
const mongoose=require("mongoose");
const StudentRoute=require("./controller/studentRoute")

//mongo db attals connection
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://srisaiprasanthk:12345@cluster0.xumxadh.mongodb.net/studentdb");
var db=mongoose.connection;
db.on("open",()=>console.log("connected to db"));
db.on("error",()=>console.log("error occurred"));
const app = express(); //creating a app

//middle ware
app.use("/students",StudentRoute);
//listening to a port number
app.listen(4000,()=>{
    console.log("server started at 4000");
})
