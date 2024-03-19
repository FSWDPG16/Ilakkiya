const userDB = require("../models/userSchema");

const userget=async(req,res)=>{
    try{
      const get =await userDB.find();
      res.json({
        data:get,
      })
    }
    catch(error){
      res.json({
        message:error.message,
      })
    }
  }

const userpost=async(req,res)=>{
    try{
      const {userName,LastName,DOB}=req.body;
      const newData= new userDB({userName,LastName,DOB });
      await newData.save()
      res.json({
        userName: userName,
        LastName:LastName,
        DOB:DOB
    
        
      })
      
    }
    catch(error){
      res.json({
      message:error.message,
      })
    }
  }

const userput=async(req,res)=>{
    try{
      const{userName,LastName,DOB}=req.body;
      const object=req.params.body;
      const updatedData=await userDB.findByIdAndUpdate(
         object,
         {userName,LastName,DOB},
         {new:true}
      );
      res.json({
        userName: userName,
        LastName:LastName,
        DOB:DOB
      })
  
    }
    catch(error){
      res.status(500).json({
        message:error.message,
      })
    }
  }

const userdelete=async(req,res)=>{
    try{
      const objectDelete=req.params.id;
      console.log("object id:",objectDelete)
  
      const deleteData =await userDB.findByIdAndDelete(objectDelete);
      res.json({
        data:deleteData,
        message:"data deleted successfully",
      });
    }
    catch(error){
      res.status(500).json({
          message:error.message,
      })
    }
  }
  const userProfile=async(req,res)=>{
    try{
      const userPic=req.file
      res.json({
        profile:userPic
      })
    }
    catch(error){
      res.json({
        message:error.message,
      })
    }
    
  }

  module.exports={userget,userpost,userput,userdelete,userProfile}