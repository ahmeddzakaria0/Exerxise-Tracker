const express = require('express');
const cors = require('cors');

const mongoose  = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const userRouter = require("./Router/userRouter") 
const exerciseRouter = require("./Router/exerciseRouter") 
/**************************DataBase Connection*******************************************************/
//mongoose.connect(process.env.DbUrl)
const uri = process.env.ATLAS_URI;

  mongoose.connect(uri);
    const connection=mongoose.connection;
    connection.once('open',()=>{
     console.log("MongoDB database connection established successfully")
    })
/**************************DataBase Connection*******************************************************/
/////////////////////////////////////////////////////////////////////////////////////////////////////
/**************************Server Connection*******************************************************/
app.listen(port , ()=>{console.log(` 🚀  Listening on port ${port} At ${new Date()} \n`)}) //Launching Server
/**************************Server Connection*******************************************************/
//MW
app.use(cors())
app.use(express.json())

app.use(exerciseRouter)
app.use(userRouter)
//////////////////////////////
//Not Found MW
app.use ((request , response , next) => {response.status(404).send("Page Is Not Found")});

//Error MW
app.use ((error,request , response , next) => {response.status(500).send(error)});  
//////////////////////////////








