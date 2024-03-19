const express=require('express')
const router=express.Router()
const multer=require('multer');
router.use(express.json())
const storage=multer.diskStorage({
    destination:"./public/userProfile",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
    
})
const upload=multer({storage:storage});
const singleupload=upload.single('profilepic')

const {userget,userpost,userput,userdelete, userProfile}=require("../controller/userController")
router.get("/go",userget)
router.post("/post",userpost)
router.put("/edit/:id",userput)
router.delete("/delete/:id",userdelete)
router.post("/profile",singleupload,userProfile)
module.exports=router;