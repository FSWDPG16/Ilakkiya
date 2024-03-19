const mongoose=require('mongoose')




const newData=()=>{
mongoose.connect(
process.env.MongoUrl
 )

.then(()=>{
  console.log("Mongoose connected Succesully.....");
})
.catch((err)=>{
  console.log("Connection Error:",err.message);
});
}
module.exports=newData;