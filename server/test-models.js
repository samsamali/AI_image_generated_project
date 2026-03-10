import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

async function testModels() {
  const models = [
    "black-forest-labs/FLUX.1-dev",
    "stabilityai/stable-diffusion-3.5-large",
    "stabilityai/stable-diffusion-3-medium",
    "stabilityai/stable-diffusion-xl-base-1.0"
  ];
  
  for (const model of models) {
    try {
      console.log(`\nTesting model: ${model}`);
      const response = await axios({
        method: 'post',
        url: `https://router.huggingface.co/models/${model}`,
        headers: {
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        data: { inputs: "a cute cat" },
        timeout: 10000,
        validateStatus: () => true
      });
      
      console.log(`Status: ${response.status}`);
      console.log(`Content-Type: ${response.headers['content-type']}`);
      
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
}

testModels();