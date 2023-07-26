import express from "express";
import { chats } from "./data";

const app=express();
app.get("/",(req,res,next)=>{
    res.send("Api is running");
})


app.listen(9000,console.log("Server has started"));