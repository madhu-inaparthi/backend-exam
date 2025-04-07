const express=require('express')
const app=express();


app.post('/signup',async(req,res)=>{
   
    try{
        const {username,email,password,dateOfBirth}=req.body;
        if(!username||!email||!password||!dateOfBirth){
            return res.status(400).send({message:"enter all fields"});
        }
        if(!username){
            return res.status(400).send({message:"username cannot be empty"});
        }
        if(!email){
            return res.status(400).send({message:"email cannot be empty"});
        }
        if(password.length<8 || password.length>=16){
            return res.status(400).send({message:"password length should be less than or equals to 16 and greater than 8"});
        }
        const newUser={username,email,password,dateOfBirth};
        const savedUser=await newUser.save();
        res.status(200).json({message:"user created successfully"});
    }catch(err){
       console.log(err)
    }
    res.status(200).json({message:"user created successfully"});
})


app.listen(8000,()=>{
    console.log("connected to server");
})