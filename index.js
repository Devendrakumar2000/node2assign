const express=require("express");//for load package.json in our file

const app = express();// for express module add for routing

app.get("/",(req,res)=>{
    res.send("this data for normal text for home routing");
})// we are aading home route api

app.get("/home/main",(req,res)=>{
    res.send("<h1>Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</h1>");
})// we are adding homain main nested route api

app.listen(2002,()=>{
    console.log("app is atarting");
}) // we adding our customize port no. of localhost
