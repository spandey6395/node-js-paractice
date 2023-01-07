const express = require('express');
var bodyParser = require('body-parser');
const mongoose=require('mongoose')
const coursesRouter = require('./routes/courses');
const userRouter = require('./routes/user')

require("dotenv").config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/courses', coursesRouter);

app.use('/api/v1/users',userRouter);



mongoose.connect(process.env.DB_CONNECTION_URL, () =>{

    console.log("Connected to db:")
})
// .then(() => { console.log('MongoDB is Connected ') })
// .catch(err => { console.log('Error connecting to MongoDB: ' + err) });

 


app.listen(process.env.PORT, () =>{
    console.log("server is running...");
});