import QueueGrid from "./QueueGrid";
import Title from "./Title";
import Container from "./Container";
import { use } from "react";
import { WebSocketContext } from "../../context/WebSocketContext";

const QueueDisplay = () => {
  const {calledList, waitingList } = use(WebSocketContext);
  const hasCalled = calledList.length > 0;
  const hasWaiting = waitingList.length > 0;

  const leftSectionWidth =
    (hasCalled && hasWaiting) || (!hasWaiting && calledList.length > 5) || (!hasCalled && waitingList.length > 5)
      ? "w-[51.25%]"
      : "w-[28.12%]";  

  return (
    <div className={`${leftSectionWidth} flex h-full flex-col items-center justify-center bg-light-gray text-black 2xl:p-12 p-6`}>
      <div className="p-3 3xl:p-6 w-full h-full">
        <div className={`w-full h-full flex gap-8 ${calledList.length <= 5 && waitingList.length <= 5 ? "xl:gap-12" : "xl:gap-[72px]"} 4xl:gap-24`}>
          {/* Called Numbers */}
          {hasCalled && 
            <Container style={`flex flex-col gap-3 xl:gap-6 ${hasWaiting ? (waitingList.length > 5 ? "w-1/3" : calledList.length <= 5 ? "w-1/2" : "w-2/3") : "w-full"}`}>
              <Title title="Called" style="text-red" />
              <QueueGrid
                list={calledList}
                textColor="text-red"
                bgColor="bg-white"
                gridClass={`grid ${calledList.length > 5 ? `grid-cols-2 grid-rows-5 ${hasWaiting ? "xl:gap-6" : "xl:gap-y-6 xl:gap-x-12"}` : "grid-cols-1 grid-rows-5 xl:gap-6"} gap-3 h-full`}
              />
            </Container>
          }

          {/* Waiting Numbers */}
          {hasWaiting && 
            <Container style={`flex flex-col gap-3 xl:gap-6 ${hasCalled ? (waitingList.length > 5 ? "w-2/3" : calledList.length <= 5 ? "w-1/2" : "w-1/3") : "w-full"}`}>
              <Title title="Waiting" style="text-black" />
              <div className={`grid ${waitingList.length > 5 ? `grid-cols-2 ${hasCalled ? "xl:gap-6" : "xl:gap-12"}` : "grid-cols-1 xl:gap-6"} h-full`}>
                <QueueGrid
                list={waitingList.slice(0, 5)}
                textColor="text-black"
                bgColor="bg-white"
                gridClass={`grid ${waitingList.length > 5 ? '' : 'grid-cols-1'} xl:gap-6 grid-rows-5 gap-3 h-full`}
                />
                {waitingList.length > 5 && (
                  <QueueGrid
                  list={waitingList.slice(5, 10)}
                  textColor="text-black"
                  bgColor="bg-white"
                  gridClass={`grid ${waitingList.length > 5 ? '' : 'grid-cols-1'} xl:gap-6 grid-rows-5 gap-3 h-full`}
                />
                )}
              </div>
            </Container>
          }
        </div>
      </div>
    </div>
  );
};

export default QueueDisplay;
