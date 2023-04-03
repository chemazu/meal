import React, { useState, useEffect, useRef } from "react";
import "../../styles/calorie-form.scss";

export default function CalorieForm() {
  const [circleWidth, setCircleWidth] = useState(20);
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newWidth = 20 + window.pageYOffset * 0.5;
      // set width range for circle
      if ( newWidth < 20) {
        // setCircleWidth(20);
        console.log("first")
      }
      console.log(circleWidth, newWidth);
      if (newWidth < 410) {
        setCircleWidth(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const [circleWidth, setCircleWidth] = useState(20);
  // const [scrollLocked, setScrollLocked] = useState(false);
  // const scrollTimeout: any = useRef(null);
  // const scrollLockHeight = 100; // example height at which scroll lock is enabled

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!scrollLocked && window.pageYOffset >= scrollLockHeight) {
  //       setScrollLocked(true);
  //     }
  //     const newWidth = 20 + window.pageYOffset * 0.1;
  //     setCircleWidth(newWidth);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollLocked]);

  // useEffect(() => {
  //   if (scrollLocked) {
  //     document.body.style.overflow = "hidden"; // disable scroll on body element
  //     scrollTimeout.current = setTimeout(() => {
  //       setScrollLocked(false);
  //     }, 2000); // example time in milliseconds after which scroll lock is disabled
  //   } else {
  //     document.body.style.overflow = "auto"; // enable scroll on body element
  //     clearTimeout(scrollTimeout.current);
  //   }
  // }, [scrollLocked]);
  return (
    <div>
      CalorieForm
      <div className="pusha-t"></div>
      <div id="animated-example" className="animated fadeIn">
        <p>Hover up</p>
      </div>
      <section className="scroll-wrapper">
        <div
          className="circle"
          style={{
            width: `${circleWidth}px`,
            height: `${circleWidth}px`,
            backgroundColor: "green",
          }}
        >
          <p className="scroll-circle">Text on a Yellow Circle</p>
        </div>
      </section>
      <section className="batty"> popopo</section>
    </div>
  );
}
