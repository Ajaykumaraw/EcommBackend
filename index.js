const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRouter = require('./routes/user.js');
const authRouter = require('./routes/auth.js');

dotenv.config();


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
        .then(()=>{console.log("Database Connected")})
        .catch((err)=>{console.log(err)});

app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);


app.listen(8080,()=>{
    console.log("app us listing on port 8080");
})