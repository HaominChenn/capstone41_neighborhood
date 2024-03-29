import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//init app
const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//connect app with database
const CONNECTION_URL = "mongodb+srv://haomin:haomin@minineighbourhood.krps8.mongodb.net/miniNeighbourhood?retryWrites=true&w=majority";
const PORT=process.env.PORT||5000;
mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT,()=>console.log('server running on port:'+PORT)))
.catch((error)=>console.log(error.message));
