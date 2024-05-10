import React, { useContext} from "react";
import mcqs_data from "../data/quetionsData";
import { UserContext } from "./QuetionariesFrame";

const Navbar = () => {
  const { progressTrack, setCurrentQueDisp, setQueNo, setSubmitStatus, setnextBtnStatus, setOptionsEvents} = useContext(UserContext);
  const prgTrackerClickFn = (i) => {
    setCurrentQueDisp(mcqs_data[i]);
    setQueNo(i+1);
    setSubmitStatus("hidden");
    setnextBtnStatus("");
    setOptionsEvents("pointer-events-none");
  };
  return (
    <div className="bg-black w-screen h-auto flex justify-between items-center pl-32 pr-10 py-5 ">
      <div className="flex gap-2">
        {mcqs_data.map((que, i) => {
          return (
            <div
              className={`bg-white w-10 h-8 flex font-semibold justify-center items-center ${progressTrack[i] ? 'cursor-pointer' : 'pointer-events-none'}`}
              key={i}
              id={`que${i + 1}-prg${i + 1}`}
              onClick={() => prgTrackerClickFn(i)}
            >
              {progressTrack[i]}
            </div>
          );
        })}
      </div>

      <div>
        <img
          src="https://d218mh3sadleh5.cloudfront.net/Clients/RINVOQ/casePlayer/cases/rinvoqlogoNew.png"
          alt="logo"
          className="w-36"
        />
      </div>
    </div>
  );
};

export default Navbar;
