"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VideoComponent from "@/components/component/VideoComponent";
import React, { useState, useEffect } from 'react';

function Component() {
  const [randomLetter, setRandomLetter] = useState('');
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setRandomLetter(String.fromCharCode(65 + Math.floor(Math.random() * 5)));
  }, [trigger]); // Run whenever 'trigger' changes

  const handleNextClick = () => {
    setTrigger(!trigger); // Toggle 'trigger' to run useEffect again
    speak(randomLetter);
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = `letter ${text}`;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <Card className="w-full max-w-screen-lg mx-auto">
      <CardContent className="space-y-4">
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-bold">Recreate the letter in the first line. Tap the image.</h3>
          <h3 className="text-lg font-bold">
            <span className="block mx-auto">{randomLetter}</span>
          </h3>
        </div>
        <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed border-gray-200 dark:border-gray-800">
          <VideoComponent />
        </div>
      </CardContent>
      <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed border-gray-200 dark:border-gray-800">
        <Button onClick={handleNextClick}>Next</Button>
      </div>
    </Card>
  );
}

export default Component;

