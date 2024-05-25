const User = require("../models/usermodel");
const bcrypt=require('bcrypt');

const signup=async(req,res)=>{
    try{
        const {email,password,username}=req.body;
        if(!email || !password || !username){
            res.status(400).json({
                message:"enter required field's"
            });
        }

        const existinguser=await User.findOne({email});
        if(existinguser){
            res.status(400).json({
                message:"user already exists"
            })
        }


        const hashedpassword=await bcrypt.hash(password,10);
        
        const mdata=new User({
           email: email,
           password: hashedpassword,
           username: username
        });

        await mdata.save();
        res.status(200).json({
            message:"user created successfully",
            data:mdata
        })
    }

    catch(ex){
        console.log(ex);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports=signup;