import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async(req,res)=>{
  try{
    res.status(201).json({message:"user created successfully"});
  }catch (err){
    console.log(err);
    res.status(500).json({message:"failed"});
  }
}

export const login = async(req,res)=>{
  try{
    res.status(201).json({message:"user created successfully"});
  }catch (err){
    console.log(err);
    res.status(500).json({message:"failed"});
  }
}