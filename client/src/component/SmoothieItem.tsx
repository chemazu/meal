import React, { useState } from "react";

export default function SmoothieItem({ smoothie }: { smoothie: any }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="smoothie-item">
      {isHovered ? (
        <img src={smoothie.image} alt="sdsd" />
      ) : (
        <img src={smoothie.imageDeco} alt="sdsd" />
      )}
      <div>{smoothie.title}</div>
    </div>
  );
}
