const express=require('express');
const app=express();
const PORT=3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to register")
});

app.post("/register",async(req,res)=>{
    const {username,email,password,DateofBirth}=req.body;

    if(!username){
        res.status(400).json({error:"Username cannot be empty"});
    }
    if(!email){
        res.status(400).json({error:"Email cannot be empty"});
    }
    if(!password || password.length<8 || password.length>16){
        res.status(400).json("Password should be greater than 8 and lesser than or equal to 16");
    }

    const user={username,email,password,DateofBirth};
    res.status(201).json({
        message:"User created",
        data:user
    });
})

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})