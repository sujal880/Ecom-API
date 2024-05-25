const mongoose=require('mongoose');
const categorySchema=new mongoose.Schema({
    image:String,
    category:String
});

const Category=mongoose.model('categories',categorySchema);
module.exports=Category;