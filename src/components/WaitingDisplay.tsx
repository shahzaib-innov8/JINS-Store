import useWaitingDisplay from "../hooks/useWaitingDisplay";
import TimeDisplay from "./common/TimeDisplay";

function WaitingDisplay() {
  const { shouldUseSmallGap, hasBothOrOnlyOneWithLongList, longListWithCalledOrWaiting, hasBothOrLongList, hasEarliest, earliest, latest, heading, subheadings } = useWaitingDisplay();
  
  return (
    <div className="bg-white flex flex-1 h-full flex-col relative justify-center items-center 2xl:p-12 p-6">
    <div className="p-3 3xl:p-6 w-full h-full">
      <div className="relative h-full flex flex-col justify-center">
        {/* Current time display on top right corner */}
          <TimeDisplay textColor="text-black"/>
        {/* Centered Time Box */}
        <div className={`flex flex-col justify-center items-center ${shouldUseSmallGap() ? '3xl:gap-[80px]' : '3xl:gap-[100px]'} gap-12`}>
          {hasBothOrOnlyOneWithLongList() ? (
            <div className={`flex 3xl:text-[88px] font-normal flex-col pr-4 4xl:text-[120px] 2xl:text-[75px] text-[60px] 3xl:leading-[132px] 4xl:leading-[200px] text-black text-center`}><h6>{subheadings[0]}</h6><div className="flex gap-6 pl-1">{subheadings.slice(1).map((text, index) => (<h6 key={index + text}>{text}</h6>))}</div></div>
          ) : (
            <h6 className="3xl:text-[96px] font-medium 4xl:text-[120px] 2xl:text-[75px] text-[60px] 3xl:leading-[134.4px] 4xl:leading-[200px] text-black text-center">{heading}</h6>
          )}
          <div className="text-center">
            <div className={`flex justify-center ${hasBothOrOnlyOneWithLongList() ? 'gap-4' : 'gap-6'} items-baseline`}>
              <div className={`flex ${hasBothOrOnlyOneWithLongList() ? 'gap-2' : 'gap-4'}`}>
                {hasEarliest && (
                  <>
                    <h1 className={`${longListWithCalledOrWaiting() ? '3xl:text-[128px]' : hasBothOrOnlyOneWithLongList() ? '3xl:text-[176px]' : '3xl:text-[250px]' } leading-none 4xl:text-[250px] 2xl:text-[140px] text-[90px] font-normal text-black`}>
                      {earliest}
                    </h1>
                    <span className={`${longListWithCalledOrWaiting() ? '3xl:text-[128px]' : hasBothOrOnlyOneWithLongList() ? '3xl:text-[176px]' : '3xl:text-[250px]' } leading-none 4xl:text-[250px] 2xl:text-[140px] text-[64px] font-normal text-black`}>-</span>
                  </>
                )}
                <h1 className={`${longListWithCalledOrWaiting() && hasEarliest ? '3xl:text-[128px]' : hasBothOrOnlyOneWithLongList() ? '3xl:text-[176px]' : '3xl:text-[250px]' } leading-none 4xl:text-[250px] 2xl:text-[140px] text-[90px] font-normal text-black`}>
                  {latest}
                </h1>
              </div>
              <h6 className={`${hasBothOrLongList() ? '3xl:text-[90px]' : '3xl:text-[100px]' } 2xl:text-[90px] text-[70px] font-medium text-black`}>min</h6>
            </div>
            {!hasEarliest && (
                <h6 className="4xl:text-[80px] text-[64px] font-normal text-black leading-16">or more</h6>
              )}
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default WaitingDisplay;
