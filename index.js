let express=require("express");
let dotenv=require("dotenv");
let cors=require('cors')
let colors=require('colors');
const databaseConnection = require("./config/db");
let morgan= require('morgan');
const route  = require("./route/auth");
dotenv.config();
let app=express();
app.use(express.json())
//application-level middleware
//morgon 
app.use(morgan('dev'))
//cors middleware
app.use(cors())     
//route-level middlware
app.use('/auth/v1', route)
let PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    databaseConnection()
    console.log(`server is running at http://127.0.0.1:${PORT}`.bgWhite.blue.underline);
})