const router = require("express").Router();
const Sign=require("../models/Sign");
router.post("/Sign",async(req,res)=>{
    const NewUser= new Sign({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    try{
        const user=await NewUser.save()
        res.status(200).json(user);

    }
    catch(err){
        res.status(404).json(err);
    }
})

//newtreh
router.post("/login",async(req,res)=>{
    try{
        const user=await Sign.findOne({name:req.body.name});
        !user && res.status(401).json("Нууц үг эсвэл нэвтрэх нэр буруу байна");
        if(user.password===req.body.password){
            res.status(200).json("Амжилттай")
        }
        else{
            res.status(404).json("Нууц үг эсвэл нэвтрэх нэр буруу байна")
        }
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;