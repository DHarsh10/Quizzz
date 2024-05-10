import React, { useState } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { createContext } from "react";
import mcqs_data from "../data/quetionsData";

export const UserContext = createContext();
const QuetionariesFrame = () => {
  const [queNo, setQueNo] = useState(1);
  const [currentQueDisp, setCurrentQueDisp] = useState(mcqs_data[0]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submittedAns, setSubmittedAns] = useState({});
  const [optionsEvents, setOptionsEvents] = useState("");
  const [resDisp, setResDisp] = useState("");
  const [progressTrack, setProgressTrack] = useState([]);
  const [nextBtnStatus, setnextBtnStatus] = useState("hidden");
  const [footerPopupComp, setFooterPopupComp] = useState("");
  const [submitStatus, setSubmitStatus] = useState(
    "opacity-50 pointer-events-none"
  );
  return (
    <UserContext.Provider
      value={{
        queNo,
        setQueNo,
        currentQueDisp,
        setCurrentQueDisp,
        selectedOptions,
        setSelectedOptions,
        submitStatus,
        setSubmitStatus,
        optionsEvents,
        setOptionsEvents,
        resDisp,
        setResDisp,
        submittedAns,
        setSubmittedAns,
        progressTrack,
        setProgressTrack,
        nextBtnStatus,
        setnextBtnStatus,
        footerPopupComp,
        setFooterPopupComp,
      }}
    >
      <div className="flex flex-col w-screen h-screen">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default QuetionariesFrame;
