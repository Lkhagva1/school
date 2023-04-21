const express =require("express")
const app =express();
const mongoose =require("mongoose")
const dotenv =require("dotenv")
const authRoute=require("./router/auth");

dotenv.config();



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("db амжилттай")).catch(err=>console.log(err))

app.use(express.json());
app.use("/api/auth", authRoute);


app.listen(4000,()=>{
    console.log("listening on port 4000")
})