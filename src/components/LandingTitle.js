import React, { useState, useEffect } from "react";

const TITLES = [
    "Create your TawaSol profile and connect with other developers",
    "TawaSol is the first website in the Arab World to connect engineers",
    "Build a professional network with other developers"
];

const LandingTitle = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(false);
    }, 2000);

    const titleInterval = setInterval(() => {
      const index = (titleIndex + 1) % TITLES.length;
      setTitleIndex(index);
      setFadeIn(true);

      setTimeout(() => {
        setFadeIn(false);
      }, 2000);
    }, 4000);

    return function cleanUp(){
      clearTimeout(timeout);
      clearInterval(titleInterval);
    };
  }, [titleIndex]);

  return (
    <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
      I am {TITLES[titleIndex]}
    </p>
  );
};

export default LandingTitle;
