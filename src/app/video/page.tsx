"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";
import path from "path";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

function Component() {
  const [randomLetter, setRandomLetter] = useState("");
  const [trigger, setTrigger] = useState(false);
  const webcamRef = useRef(null);
  const [snapShot, setSnapShot] = useState(null);
  const [userAnswerCorrect, setUserAnswerCorrect] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const router = useRouter();

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

  function SettingsIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  function HeartIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <path
          d="M2.65625 13.4717C2.65625 16.2267 4.05262 18.6627 6.19106 20.1401L15.3112 28.0973C16.3946 29.0426 18.0133 29.03 19.0819 28.0679L28.254 19.8104C30.1391 18.3144 31.3438 16.0307 31.3438 13.4717C31.3438 8.96552 27.6079 5.3125 22.9993 5.3125C20.6443 5.3125 18.5172 6.26635 17 7.80049C15.4828 6.26635 13.3557 5.3125 11.0008 5.3125C6.39223 5.3125 2.65625 8.96552 2.65625 13.4717Z"
          fill="#FF4B4B"
          stroke="white"
          stroke-width="2"
        />
        <path
          opacity="0.3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6619 16.9888C12.5042 16.9888 13.9977 15.4513 13.9977 13.5546C13.9977 11.6579 12.5042 10.1204 10.6619 10.1204C8.81964 10.1204 7.32617 11.6579 7.32617 13.5546C7.32617 15.4513 8.81964 16.9888 10.6619 16.9888Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <Card className="w-full max-w-screen-lg mx-auto p-8 gap-8">
      <div className="flex justify-between items-center pb-4">
        <SettingsIcon
          onClick={() => router.push("/home")}
          className="text-gray-400"
        />
        <div className="ml-4" />
        {/* use state to keep progress */}

        <Progress value={33} />
        <div className="flex items-center ml-4">
          <HeartIcon className="text-red-500" />
          <p className="text-red-500 font-din-rounded">5</p>
        </div>
      </div>
      <CardContent className="space-y-4">
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-din-rounded">
            Recreate the letter in the first line. Tap the image.
          </h3>
          <h3 className="text-xl font-din-rounded">
            <span className="block mx-auto text-5xl font-din-rounded font-bold">
              {randomLetter}
            </span>
          </h3>
        </div>
        <div className="flex items-center justify-center p-4  rounded-lg ">
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
      <div className="flex items-center justify-center p-4 rounded-lg gap-8">
        <Button
          className="bg-[#6BA6FF] text-white py-6 px-20 rounded-lg din-rounded font-bold text-xl hover:bg-[#2b70c9] border-2 border-[#2b70c9] drop-shadow-2xl max-w-60"
          onClick={handleNextClick}
        >
          Next
        </Button>
        <Button
          className="bg-wing-overlay drop-shadow-2xl hover:bg-feather-green text-white border-green py-6 px-20 rounded-lg din-rounded font-bold text-xl  border-2 max-w-60 border-mask-green"
          onClick={checkLetter}
        >
          Check Letter
        </Button>
      </div>
      {feedbackText && (
        <div className="flex items-center justify-center p-4 rounded-lg  ">
          {feedbackText}
        </div>
      )}
    </Card>
  );
}

export default Component;
