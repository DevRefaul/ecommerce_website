import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import "./LoadingScene.css";

const TransParentLoadingScene = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-transparent">
      <h2 className="text-6xl uppercase text-[#4fa94d] font-semibold flex">
        L
        <span className="inline-block mx-2">
          {" "}
          <ThreeCircles
            height="48"
            width="48"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </span>
        ading
      </h2>
    </section>
  );
};

export default TransParentLoadingScene;
