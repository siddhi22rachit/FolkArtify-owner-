import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async(req,res)=>{
  const {
    name,
    phone,
    email,
    address,
    product,
    shopAddress,
    productDetails,
    bankName,
    accountNo,
    ifsc,
    password,
    images,
  } = req.body;
  try{
    //checking if the user exixts or not
    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: 'User already exists with this email.' });
    // }

    //hash the password 

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);


    //cerate the new user and save to the db

    const newUser = await prisma.user.create
    ({
      data:{
      name,
      phone,
      email,
      address,
      product,
      shopAddress,
      productDetails,
      bankName,
      accountNo,
      ifsc,
      images,
      password: hashedPassword,
      },
    });

    console.log(newUser);

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

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};