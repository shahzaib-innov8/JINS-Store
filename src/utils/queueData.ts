import { QueuesData } from "../types/queueTypes";

export const filterQueueData = ({
  countryCode,
  calledList,
  waitingList,
}: QueuesData) => {
  const hasNoData = calledList.length === 0 && waitingList.length === 0;
  if (hasNoData) return { calledList: [], waitingList: [] };
  let maxWaiting = 10;
  let maxCalled = 10;

  if (countryCode === "us") {
    maxWaiting = 5;
    return {
      calledList: calledList.slice(0, maxCalled),
      waitingList: waitingList.slice(0, maxWaiting),
    };
  }

  if (countryCode === "mn") {
    maxCalled = waitingList.length > 0 ? 5 : 10;

    return {
      calledList: calledList.slice(0, maxCalled),
      waitingList: waitingList.slice(0, maxWaiting),
    };
  }

  return { calledList, waitingList };
};
