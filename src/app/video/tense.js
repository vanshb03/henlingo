import * as tf from '@tensorflow/tfjs-node';

async function checkLetter(imagePath: string) {
  // Load the MobileNet model
  const model = await mobilenet.load();

  // Load the image from the file path
  const image = tf.node.decodeImage(imagePath);

  // Resize the image to fit the MobileNet model input
  const resizedImage = tf.image.resizeBilinear(image, [224, 224]);

  // Normalize the image data
  const normalizedImage = resizedImage.div(255.0);

  // Reshape to a single-item batch
  const reshapedImage = normalizedImage.reshape([1, 224, 224, 3]);

  // Make a prediction
  const predictions = await model.predict(reshapedImage).data();

  // Get the top prediction
  const topPrediction = Array.from(predictions)
    .map((p, i) => ({ probability: p, className: String.fromCharCode(65 + i) }))
    .sort((a, b) => b.probability - a.probability)[0];

  return topPrediction.className;
}
