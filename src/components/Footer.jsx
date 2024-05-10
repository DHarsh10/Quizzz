import React, { useContext } from "react";
import {clr_plt_1} from '../constants/constant.js';
import { UserContext } from "./QuetionariesFrame.jsx";

const Footer = () => {
  let popUps = [
    "Indication/ Important Safety",
    "Safety Profile",
    "Study Design",
    "Mechanism of Action",
    "Dosing and Monitoring",
    "Definitions",
    "Abbreviations",
    "References",
  ];

  const {setFooterPopupComp} = useContext(UserContext)

  const footerPopupBtnFn = (id) => {
    setFooterPopupComp(id);
  }
  return (
    <div className="h-auto pl-32">
      <div className="flex">
        <div className={`flex justify-between gap-1 w-[90%] bg-[#${clr_plt_1}] px-8 `}>
          {popUps.map((name, id) => (
            <div key={id} className=" flex items-center flex-col w-[12%] h-full cursor-pointer py-4" onClick={() => footerPopupBtnFn(id+1)}>
              <img
                className="w-7"
                src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/corporate/images/case_players_imgs/integration.png"
                alt=""
              />
              <span className="text-[10px] pt-1 text-center">{name}</span>
            </div>
          ))}
        </div>

        <div className="w-[10%]">
          <div className=" flex justify-center items-center flex-col px-8 py-4 cursor-pointer">
            <img
              className="w-7"
              src="https://d218mh3sadleh5.cloudfront.net/Website/Internal/corporate/images/case_players_imgs/integration.png"
              alt=""
            />
            <span className="text-[10px] pt-1">exit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
