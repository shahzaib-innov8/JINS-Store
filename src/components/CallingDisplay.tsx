import { use } from "react";
import TimeDisplay from "./common/TimeDisplay";
import { useCallingDisplay } from "../hooks/useCallingDisplay";
import { WebSocketContext } from "../context/WebSocketContext";

const CallingDisplay = () => {
  const { callingNumberClass, callingTitleClass, callingNumber } = use(WebSocketContext);
  const { overlayRef, textRef, titleRef } = useCallingDisplay();
  return (
    <div className="relative bg-white flex flex-1 h-full flex-col items-center overflow-hidden 2xl:p-12 p-6">
      <div ref={overlayRef} className="bg-red w-full h-full absolute z-5 top-0 opacity-0"></div>
      <div className="p-3 3xl:p-6 w-full h-full flex flex-col justify-center relative">
        <div className="w-full h-full z-10 relative">
          <TimeDisplay textColor="text-white" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col 2xl:gap-16">
          {/* calling heading */}
            <h2 ref={textRef} className={`2xl:text-[100px] 3xl:text-[130px] text-[80px] font-normal 3xl:font-medium ${callingTitleClass}`}>
              Calling
            </h2>
            {/* calling number */}
            <h1 ref={titleRef} className={`text-[140px] 2xl:text-[200px] 3xl:text-[304px] xl:leading-[204px] 3xl:leading-[312px] m-0 font-normal ${callingNumberClass}`}>
              {callingNumber}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallingDisplay;
