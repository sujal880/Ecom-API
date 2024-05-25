const express=require('express');
const routes = require('./src/routes/userroutes');
const allroutes=express.Router();

allroutes.use('/ecom',routes);

module.exports=allroutes;