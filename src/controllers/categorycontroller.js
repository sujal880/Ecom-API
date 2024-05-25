const Category = require("../models/categorymodel")

const categorydata=async(req,res)=>{
    try{
        const data=await Category.find();
        res.status(200).json({
            data:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=categorydata;