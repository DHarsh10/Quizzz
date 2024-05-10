import React from "react";
import { clr_plt_1 } from "../constants/constant";
import mcqs_data from "../data/quetionsData";
import { useContext } from "react";
import { UserContext } from "./QuetionariesFrame";

const NavButtons = () => {
  const {
    setCurrentQueDisp,
    queNo,
    setQueNo,
    submitStatus,
    setSubmitStatus,
    setOptionsEvents,
    selectedOptions,
    setResDisp,
    submittedAns,
    setSubmittedAns,
    progressTrack,
    setProgressTrack,
    nextBtnStatus,
    setnextBtnStatus,
  } = useContext(UserContext);

  const nextQue = () => {
    if (queNo < mcqs_data.length) {
      setCurrentQueDisp(mcqs_data[queNo]);
      setQueNo(queNo + 1);
      if (selectedOptions[queNo + 1]) {
        if (submittedAns[queNo + 1]) {
          setSubmitStatus("hidden");
          setOptionsEvents("pointer-events-none");
        } else {
          setSubmitStatus("");
          setOptionsEvents("");
          setnextBtnStatus("hidden");
        }
      } else {
        setSubmitStatus("opacity-50 pointer-events-none");
        setnextBtnStatus("hidden");
        setOptionsEvents("");
      }
      setResDisp("");
    }
  };

  const submitAns = () => {
    const ansStatus =
      mcqs_data[queNo - 1]["rightAnsId"] === selectedOptions[queNo];
    setSubmitStatus("hidden");
    setnextBtnStatus("");
    setOptionsEvents("pointer-events-none");
    ansStatus ? setResDisp("Correct") : setResDisp("Wrong");

    const updatedArray = [...progressTrack];
    updatedArray[queNo - 1] = ansStatus ? "✓" : "X";
    setProgressTrack(updatedArray);

    setSubmittedAns((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [queNo]: true,
    }));

    console.log(selectedOptions)
  };

  return (
    <>
      <div
        className={`bg-[#${clr_plt_1}] w-fit px-8 py-2 text-base cursor-pointer h-fit ${submitStatus}`}
        onClick={submitAns}
      >
        Submit answer
      </div>
      <div
        className={`bg-[#${clr_plt_1}] w-fit px-8 py-2 text-base cursor-pointer h-fit ${nextBtnStatus}`}
        onClick={nextQue}
      >
        Next question
      </div>
    </>
  );
};

export default NavButtons;
