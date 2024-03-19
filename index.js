const express=require('express')
const app=express()
app.use(express.json())
const newData=require("./common/Conection")
const router=require("./routers/UserMethode")
require("dotenv").config();
newData();
app.use(router);
const PORT=process.env.PORT||2000;





app.get("/",(req,res)=>{
    res.send('welcome the page')
})
app.post('/d',(req,res)=>{
    const {name} =req.body;
    res.json({
      data:name
    })
  })

app.use("/hi",(req,res)=>{
    res.send('responds')
})















app.listen(PORT, ()=>{
console.log("Server is running",PORT)
})


