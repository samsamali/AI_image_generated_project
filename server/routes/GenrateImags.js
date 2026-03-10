import express from 'express';
import { generateImage } from '../controllers/GenerateAIimages.js';
const router = express.Router();

router.post('/', generateImage);

export default router;