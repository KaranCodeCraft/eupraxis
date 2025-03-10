"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from '@/public/animations/loading.json'

const PreLoader = () => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-80 z-50">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default PreLoader;

