import React from "react";
import "./LoadingScene.css";

const TransParentLoadingScene = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-transparent">
      <h2 className="text-6xl uppercase font-semibold flex">
        L
        <span className="loader mx-1 border-[6px] w-[50px] h-[50px] border-[#4fa94d] border-dashed rounded-full inline-block"></span>
        ading
      </h2>
    </section>
  );
};

export default TransParentLoadingScene;
