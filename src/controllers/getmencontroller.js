const Mens = require("../models/mensmodel")

const getmencontroller=async(req,res)=>{
    try{
        const data=await Mens.find();
        res.status(200).json({
            message:"data getted",
            data:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}


module.exports=getmencontroller;