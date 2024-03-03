// pages/api/checkLetter.js

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed', message: 'Only POST requests are allowed' });
  }

  try {
    const { image } = req.body; // Assuming the client sends the image as a base64 string

    // Decode the base64 image string
    const base64Image = image.split(';base64,').pop();
    const filePath = path.join(process.cwd(), 'public', 'snapshot.jpg');

    // Save the image to a file
    fs.writeFileSync(filePath, base64Image, { encoding: 'base64' });

    // Load the MobileNet model
    const net = await mobilenet.load();

    // Load the image from file
    const imageBuffer = fs.readFileSync(filePath);
    const decodedImage = tf.node.decodeImage(imageBuffer);

    // Resize and normalize the image
    const resizedImage = tf.image.resizeBilinear(decodedImage, [224, 224]);
    const normalizedImage = resizedImage.div(255.0);
    const reshapedImage = normalizedImage.reshape([1, 224, 224, 3]);

    // Classify the image
    const result = await net.classify(reshapedImage);
    const topPrediction = result[0].className.toLowerCase();

    // Respond with the prediction result
    res.status(200).json({ prediction: topPrediction });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
