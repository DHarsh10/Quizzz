import React, { useContext } from "react";
import { UserContext } from "./QuetionariesFrame";
import mcqs_data from "../data/quetionsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ResultsBlock = () => {
  const { queNo, selectedOptions, submitStatus } =
    useContext(UserContext);
  const isCorrect = selectedOptions[queNo] === mcqs_data[queNo - 1]["rightAnsId"];
  const icon = isCorrect ? faCheckCircle : faTimesCircle;
  const color = isCorrect ? "#35ba2c" : "#ff0000";

  return (
    <div
      className={`text-black ${
        (selectedOptions[queNo] && submitStatus === "hidden") ? "block" : "hidden"
      } h-full flex justify-center items-center gap-1 text-3xl font-semibold`}
    >
        <FontAwesomeIcon icon={icon} style={{ color }} />
        {
          isCorrect ? "Correct": "Incorrect"
        }
    </div>
  );
};

export default ResultsBlock;
