import express from "express"
import { createpost, getAllPosts } from "../controllers/posts.js";


const router = express.Router();
router.get("/", getAllPosts)
router.post("/", createpost)

export default router