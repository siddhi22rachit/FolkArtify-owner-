import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.controller.js";
import express from "express";

const router = express.Router();

router.get("/", getPosts);  // Route to get multiple posts
router.get("/:id", getPost);  // Route to get a single post by ID
router.post("/", addPost);  // Route to add a new post
router.put("/:id", updatePost);  // Route to update a post by ID
router.delete("/:id", deletePost);  // Route to delete a post by ID

export default router;
