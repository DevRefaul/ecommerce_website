import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const TransParentLoadingScene = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-[rgba(0,0,0,0.3)]">
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </section>
  );
};

export default TransParentLoadingScene;
