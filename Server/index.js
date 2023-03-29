import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js' 
import UserRoute from './Routes/UserRoute.js' 
import PostRoute from './Routes/PostRoute.js'
import cors from 'cors'

// Routes

const app = express();


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())



mongoose.connect("mongodb+srv://ashwin03:ashwin03@cluster0.ydejzyx.mongodb.net/mernstack?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>app.listen(8000, ()=>console.log("Server running on port: 8000")))
.catch((error)=>console.log(error));

  // usage of routes
    app.use('/auth', AuthRoute)   
    app.use('/user', UserRoute)
    app.use('/post', PostRoute) 
