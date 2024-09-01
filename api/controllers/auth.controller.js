import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
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
  } = req.body;
  try {
    // checking if the user exixts or not
    

    //hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    //cerate the new user and save to the db

    const newUser = await prisma.user.create({
      data: {
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
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed" });
  }
};

export const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { name },
    });

    if (!user)
      return res.status(400).json({
        message: "Invalid Credentials!",
      });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid Credentials!" });

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true,
        maxAge: age,
      })

      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
