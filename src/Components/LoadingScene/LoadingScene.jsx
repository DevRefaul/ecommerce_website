import React from "react";
import "./LoadingScene.css";

const LoadingScene = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h2 className="text-6xl uppercase">
        L
        <span className="loader border-[4px] w-[45px] h-[45px] border-green-400 border-dashed rounded-full inline-block"></span>
        ading Data
      </h2>
    </div>
  );
};

export default LoadingScene;
