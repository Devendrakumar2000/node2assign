const express=require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("this data for normal text for home routing");
})

app.get("/home/main",(req,res)=>{
    res.send("<h1>Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</h1>");
})

app.listen(2002,()=>{
    console.log("app is atarting");
})
