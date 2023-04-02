import React from "react";
import "../styles/components/infinite-slider.scss";

export default function InfiniteSlider() {
  return (
    <div className="animate-parent">
      {/* <div className="animate">
        This div will move left by 75% viewport width
      </div> */}
      <div className="second-animate">
        This div will move left by 75% viewport width
      </div>
    </div>
  );
}
