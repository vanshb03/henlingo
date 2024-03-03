"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import path from 'path';

function Component() {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const letters = ['C', 'D', 'A', 'A']; // Fixed sequence of letters
  const webcamRef = useRef(null);
  const [snapShot, setSnapShot] = useState(null);
  const [userAnswerCorrect, setUserAnswerCorrect] = useState(null);

  useEffect(() => {
    speak(letters[currentLetterIndex]);
  }, [currentLetterIndex]); // Run whenever 'currentLetterIndex' changes

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setSnapShot(imageSrc);
    }
  };

  const handleNextClick = () => {
    if (currentLetterIndex < letters.length - 1) {
      setCurrentLetterIndex(currentLetterIndex + 1);
    } else {
      console.log('End of sequence');
    }
    setSnapShot(null); // Reset the snapshot
    setUserAnswerCorrect(null); // Reset the user's answer correctness
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = `letter ${text}`;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }
  };

  const checkLetter = async () => {
    const imageData = webcamRef.current.getScreenshot();
    const response = await fetch('/api/checkLetter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageData }),
    });

    if (response.ok) {
      const data = await response.json();
      const { prediction } = data;
      const isCorrect = prediction === letters[currentLetterIndex].toLowerCase();
      setUserAnswerCorrect(isCorrect);
    } else {
      console.error('Failed to classify image:', response.statusText);
    }
  };

  return (
    <Card className="w-full max-w-screen-lg mx-auto">
      <CardContent className="space-y-4">
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-bold">Recreate the letter in the first line. Tap the image.</h3>
          <h3 className="text-lg font-bold">
            <span className="block mx-auto">{letters[currentLetterIndex]}</span>
          </h3>
        </div>
        <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed border-gray-200 dark:border-gray-800">
          {snapShot ? (
            <img src={snapShot} alt="captured" />
          ) : (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          )}
        </div>
        <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed border-gray-200 dark:border-gray-800">
          {userAnswerCorrect === true && (
            <Button style={{ backgroundColor: 'green' }}>Correct</Button>
          )}
          {userAnswerCorrect === false && (
            <Button style={{ backgroundColor: 'red' }}>Incorrect</Button>
          )}
        </div>
      </CardContent> 
      {/* true false true */}
      <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed border-gray-200 dark:border-gray-800">
        <Button onClick={handleNextClick}>Next</Button>
        <Button onClick={checkLetter}>Check Letter</Button>
      </div>
    </Card>
  );
}

export default Component;
