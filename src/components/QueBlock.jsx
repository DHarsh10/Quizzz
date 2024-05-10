import React, { useContext, useRef, useState } from "react";
import parse from "html-react-parser";
import { UserContext } from "./QuetionariesFrame";
import ResultsBlock from "./ResultsBlock";
import useShuffledOptions from "../customHooks/useShuffledOptions";

const QueBlock = () => {
  let optionsObj = useShuffledOptions();

  const {
    queNo,
    setSubmitStatus,
    selectedOptions,
    setSelectedOptions,
    currentQueDisp,
    optionsEvents,
    submittedAns
  } = useContext(UserContext);

  const eleRefs = useRef([]);
  let queId = currentQueDisp.id;

  const optionClickFn = (el) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [queNo]: el.target.id,
    }));

    setSubmitStatus("");
  };

  return (
    <div className="w-1/4 h-full">
      <div className="h-4/5 overflow-auto">
        <p className="mb-4">{parse(currentQueDisp.question)}</p>
        <ul>
          {currentQueDisp.options.map((opt, id) => {
            let optionKey, optionVal, optId;
            if (Object.keys(optionsObj).length) {
              optionKey = Object.keys(optionsObj[`que${queNo}`][id])[0];
              optionVal = Object.values(optionsObj[`que${queNo}`][id])[0];
              optId = `que${queId}-opt${optionKey}`;
            }

            return optId ? (
              <li
                id={optId}
                ref={(el) => (eleRefs.current[id] = el)}
                key={id}
                className={`px-2 py-3 mt-2 text-center bg-[#efefef] cursor-pointer ${optionsEvents} ${
                  selectedOptions[queNo] === optId ? "activeOptState" : ""
                }`}
                onClick={optionClickFn}
              >
                {parse(optionVal)}
              </li>
            ) : (
              ""
            );
          })}
        </ul>
      </div>

      <div className="h-1/5">
        <ResultsBlock />
      </div>
    </div>
  );
};

export default QueBlock;
