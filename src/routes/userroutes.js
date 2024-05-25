const express=require('express');
const signup = require('../controllers/signupcontroller');
const signin = require('../controllers/signincontroller');
const getCarouseldata = require('../controllers/carouselslidercontroller');
const categorydata = require('../controllers/categorycontroller');
const routes=express.Router();

routes.post('/signup',signup);
routes.post('/signin',signin);
routes.get('/getcarousel',getCarouseldata);
routes.get('/categories',categorydata);

module.exports=routes;