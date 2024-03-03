"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import path from "path";

function Component() {
  const [randomLetter, setRandomLetter] = useState("");
  const [trigger, setTrigger] = useState(false);
  const webcamRef = useRef(null);
  const [snapShot, setSnapShot] = useState(null);
  const [userAnswerCorrect, setUserAnswerCorrect] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");

  useEffect(() => {
    setRandomLetter(String.fromCharCode(65 + Math.floor(Math.random() * 5)));
    speak(randomLetter);
  }, [trigger]); // Run whenever 'trigger' changes

  useEffect(() => {
    const timer = setTimeout(() => {
      captureImage();
    }, 4000);
    return () => clearTimeout(timer);
  }, [trigger]);

  useEffect(() => {
    if (feedbackText) {
      const timer = setTimeout(() => {
        setFeedbackText("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [feedbackText]);

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setSnapShot(imageSrc);
    }
  };

  const handleNextClick = () => {
    setTrigger(!trigger); // Toggle 'trigger' to run useEffect again
    setSnapShot(null); // Reset the snapshot
    setUserAnswerCorrect(null); // Reset user answer correctness
    setFeedbackText("");
  };

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = `letter ${text}`;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }
  };

  const checkLetter = () => {
    if (clickCount === 0 || clickCount === 2) {
      setUserAnswerCorrect(true);
      setFeedbackText("Correct");
    } else {
      setUserAnswerCorrect(false);
      setFeedbackText("Incorrect");
    }

    setClickCount(clickCount + 1);
  };

  return (
    <Card className="w-full max-w-screen-lg mx-auto">
      <CardContent className="space-y-4">
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-bold">
            Recreate the letter in the first line. Tap the image.
          </h3>
          <h3 className="text-lg font-bold">
            <span className="block mx-auto">{randomLetter}</span>
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
      </CardContent>
      <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed border-gray-200 dark:border-gray-800">
        <Button onClick={handleNextClick}>Next</Button>
        <Button onClick={checkLetter}>Check Letter</Button>
      </div>
      {feedbackText && (
        <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed border-gray-200 dark:border-gray-800">
          {feedbackText}
        </div>
      )}
    </Card>
  );
}

export default Component;
