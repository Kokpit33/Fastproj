const express = require('express')
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("hello world");
    res.end();
}).listen(port,()=>{
    console.log(`localhost:${port}`);
    
})/*
/*app.listen(PORT,()=>{
    console.log(`server is up running ${PORT}`);
})*/