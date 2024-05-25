const mongoose=require('mongoose');
const carouselSchema=new mongoose.Schema({
    image:String
});

const Carousel=mongoose.model('carousels',carouselSchema);
module.exports=Carousel;