const User = require("../models/usermodel");

const signin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const userdata=await User.findOne({email});
        if(userdata.length===0){
            return res.status(400).json({
                message:'user doesnt found'
            })
        }
        if(userdata[0].password!=password){
            return res.status(501).json({status:false,message:'password not matched'})
        }
        res.status(200).json({status:true,message:'Login Successful',data:userdata})

    }

    catch(ex){
        res.status(500).json({status:true,message:'Internal Server Error',data:userdata})

    }
}

module.exports=signin;