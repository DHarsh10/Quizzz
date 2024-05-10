import React, { useContext, useState } from "react";
import QueBlock from "./QueBlock";
import QueDescBlock from "./QueDescBlock";
import { clr_plt_1 } from "../constants/constant.js";
import NavButtons from "./NavButtons.jsx";
import { UserContext } from "./QuetionariesFrame.jsx";
import FooterPopup from "./FooterPopup.jsx";
import InactiveStatusPopup from "./InactiveStatusPopup.jsx";

const Body = () => {
  const { queNo, footerPopupComp } = useContext(UserContext);


 
  return (
    <div className="h-full relative">
      <div className="absolute top-10">
        <div className={`bg-[#${clr_plt_1}] w-28 p-1 text-center`}>
          Question {queNo}
        </div>
        <div
          className={`bg-[#${clr_plt_1}] w-28 p-1 text-center text-5xl font-extrabold mt-2`}
        >
          RA
        </div>
      </div>

      <div className="flex gap-4 h-[85%] px-32 pt-10">
        <QueBlock/>
        <QueDescBlock />
      </div>

      <div className="flex gap-2 h-[15%] justify-end items-center pr-32">
        <NavButtons />
      </div>

      {footerPopupComp && <FooterPopup/>}

      <InactiveStatusPopup/>
    </div>
  );
};

export default Body;
