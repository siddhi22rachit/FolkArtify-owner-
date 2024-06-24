import prisma from "../lib/prisma.js";
import { ObjectId } from "mongodb";

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
  const id  = req.params.id;
  
  try {
    const post = await prisma.post.findUnique({
      where: { id: new ObjectId(id) },
      include: {
        postDetail: true,
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    console.log(err);
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
export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { postData, postDetail } = req.body;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid post ID" });
  }

  try {
    const updatedPost = await prisma.post.update({
      where: { id: ObjectId(id).toString() },
      data: {
        ...postData,
        postDetail: {
          update: postDetail,
        },
      },
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update post" });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  const { id } = req.params;
  const tokenUserId = req.userId;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid post ID" });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id: ObjectId(id).toString() },
    });

    if (!post || post.userId !== tokenUserId) {
      return res.status(403).json({ message: "Not authenticated" });
    }

    await prisma.post.delete({
      where: { id: ObjectId(id).toString() },
    });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete post" });
  }
};
