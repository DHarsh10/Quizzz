import { useState, useEffect } from "react";
import mcqs_data from "../data/quetionsData";

const useShuffledOptions = () => {
  const [optns, setOptns] = useState({});

  useEffect(() => {
    const optionsObj = {};
    mcqs_data.forEach((data, i) => {
      const options = data.options;
      optionsObj[`que${i + 1}`] = shuffleArray(options);
    });
    setOptns(optionsObj); 
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return optns;
};

export default useShuffledOptions;
