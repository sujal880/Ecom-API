const express=require('express');
const router = require('./app');
require('./config/db');
const app=express();


app.use(express.json());
app.use(router);




app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is Properly Running"
    })
})

app.listen(4000,()=>{
    console.log('Server is Running on PORT 4000');
});