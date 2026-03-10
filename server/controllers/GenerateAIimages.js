import axios from "axios";
import * as dotenv from "dotenv";
import createError from "../error.js";

dotenv.config();

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return next(createError(400, "Prompt is required"));

    console.log("Generating image for prompt:", prompt);

    // ✅ SAHI MODEL NAMES WITH CORRECT ENDPOINT
    const models = [
      {
        name: "FLUX.1-dev",
        url: "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0"
      }
    ];

    let lastError = null;

    for (const model of models) {
      try {
        console.log(`Trying model: ${model.name}`);
        console.log(`URL: ${model.url}`);

        const response = await axios({
  method: "post",
  url: model.url,
  headers: {
    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "image/png",
  },
  data: {
    inputs: prompt,
  },
  responseType: "arraybuffer",
});

        console.log(`Response status: ${response.status}`);

        if (response.status === 200) {

  const contentType = response.headers["content-type"];

  const base64Image = Buffer.from(response.data).toString("base64");

  console.log("Image length:", base64Image.length);

  const resultImage = `data:${contentType};base64,${base64Image}`;

  return res.status(200).json({
    success: true,
    photo: resultImage,
  });
} else if (response.status === 400) {

          // Convert the binary data to base64
          const base64Image = Buffer.from(response.data).toString('base64');
          const resultImage = `data:${contentType};base64,${base64Image}`;

          return res.status(200).json({ success: true, photo: resultImage });
        } else {
          // Try to get error message
          let errorMsg = `Status ${response.status}`;
          if (response.data) {
            try {
              errorMsg = Buffer.from(response.data).toString();
            } catch (e) {
              // Ignore
            }
          }
          console.log(`❌ Model ${model.name} failed:`, errorMsg);
          lastError = errorMsg;
        }

      } catch (modelError) {
        console.log(`❌ Error with ${model.name}:`, modelError.message);
        if (modelError.response?.data) {
          try {
            const errorData = Buffer.from(modelError.response.data).toString();
            console.log("Error details:", errorData);
            lastError = errorData;
          } catch (e) { }
        } else {
          lastError = modelError.message;
        }
      }
    }

    // If we get here, no model worked
    return next(createError(404, "API issue from Hugging Face: " + (lastError || "No working model found")));

  } catch (error) {
    console.error("Generation Error:", error);
    next(createError(500, "Image Generation Failed: " + error.message));
  }
};