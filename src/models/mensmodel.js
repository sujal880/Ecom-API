const mongoose=require('mongoose');
const mensSchema=new mongoose.Schema({
    image:String,
    description:String,
    price:String
});


const Mens=mongoose.model('mens',mensSchema);

module.exports=Mens;