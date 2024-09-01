import prisma from "../lib/prisma.js";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose'; // Import instead of require



// Get multiple posts based on query parameters
export const getPosts= async(req,res)=>{
  const query= req.query;
  try{
    const posts= await prisma.post.findMany({
      where:{
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom:parseInt(query.bedroom) || undefined,
        price:{
          gte: parseInt(query.minPrice) ||0 ,
          lte: parseInt(query.maxPrice) ||1000000,
        },
      },
    });
    res.status(200).json(posts);

  }catch(err){
    console.log(err)
    res.status(500).json({message:"Failed to get posts"})
  }
}


// Get a single post by ID
export const getPost = async (req, res) => {
  const id = req.params.id;

  // Check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid post ID" });
  }
  

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });

    // if (!post) {
    //   return res.status(404).json({ message: "Post not found." });
    // }

    let userId;
    const token = req.cookies?.token;

    if(!token){
      userId =null;
    }else{
      jwt.verify(token,process.env.JWT_SECRET_KEY, async (err,payload)=>{
        if(err){
          userId =null;
        }else{
          userId =payload.id;
        }
      })
    }
    

    const saved = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          postId: id,
          userId,
        },
      },
    });

    res.status(200).json({ ...post, isSaved: saved ? true : false });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch post" });
  }
};
// Add a new post
export const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetail: {
          create: body.postDetail,
        },
      },
    });

    res.status(201).json({ newPost });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add post" });
  }
};

// Update a post
// Update a post
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { postData, postDetail } = req.body;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid post ID" });
  }

  try {
    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        ...postData,
        postDetail: {
          update: postDetail,
        },
      },
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update post" });
  }
};


// Delete a post
export const deletePost= async(req,res)=>{
  const id= req.params.id;
  const tokenUserId= req.userId;
  try{
     const post= await prisma.post.findUnique({
      where:{id},
     });
if(post.userId !== tokenUserId){
  return res.status(403).json({message:"not Athorized"});
}

await prisma.post.delete({
  where:{id},
})

    res.status(200).json({message:"deleted"})

  }catch(err){
    console.log(err)
    res.status(500).json({message:"Failed to delete"})
  }
}