import React, { Suspense, useContext } from "react";
import { UserContext } from "./QuetionariesFrame";

const LoadingComponent = () => <div>Loading...</div>;
const FooterPopup = () => {
  const { footerPopupComp, setFooterPopupComp } = useContext(UserContext);
  const PopupContent = React.lazy(() =>
    import(`./FooterPopupContent${footerPopupComp}`)
  );

  return (
    <>
      <div className="w-5/6 h-3/4 bg-white z-50 fixed inset-0 m-auto px-10 pt-16 pb-8">
        <div className="absolute top-2 right-2 bg-black text-white px-3 cursor-pointer" onClick={() => setFooterPopupComp('')}>
          Close
        </div>
        <Suspense fallback={<LoadingComponent />}>
          <PopupContent />
        </Suspense>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-45 z-40"></div>
    </>
  );
};

export default FooterPopup;
