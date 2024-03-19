const mongoose=require('mongoose')
const user=new mongoose.Schema({
    userName:{
      type:String
    },
    LastName:{
      type:String
    },
    DOB:{
      type:String
    }
  
  
  });
  const userDB=mongoose.model('ilaks',user)
  module.exports=userDB;