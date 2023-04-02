import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function RecipeItem() {
  const data = {
    slug: ["Lunch", "High Protein", "Vegan"],
    duration: 15,
    title: "Protein Pancakes",
  };
  return (
    <>
      <div className="recipe-card">
        <div className="top">
          {data.slug.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
      <div className="content">
        <div className="time">
          <FontAwesomeIcon icon={faHome} />
          <span>{data.duration} minutes</span>
        </div>
        <h2 className="title">{data.title}</h2>
      </div>
    </>
  );
}
