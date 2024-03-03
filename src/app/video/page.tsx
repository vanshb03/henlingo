"use client";

import React, { useState, useEffect, useRef } from 'react';
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview() {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // 5 seconds
  
      return () => clearTimeout(timeout);
    }, []);
  
    return isVisible ? (
      <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          HENLINGO
        </h1>
      </div>
    ) : (
      <VideoComponent />
    );
  }
  
  const VideoComponent = () => {
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);
  
    useEffect(() => {
      const getMediaStream = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          setStream(stream);
        } catch (error) {
          console.error('Error accessing webcam:', error);
        }
      };
  
      getMediaStream();
  
      return () => {
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
      };
    }, []);
  
    useEffect(() => {
      if (stream && videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }, [stream]);
  
    return (
      <div>
        <video ref={videoRef} autoPlay playsInline />
      </div>
    );
  };
  
  export default SparklesPreview;
