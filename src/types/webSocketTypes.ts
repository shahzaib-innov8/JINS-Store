import { Dispatch, SetStateAction } from "react";
import { calledList, CallingNumber } from "./callingTypes";
import { waitingList, WaitTimeRange } from "./waitingTypes";

export interface QueuesData {
  callingNumber?: CallingNumber;
  calledList: calledList;
  waitingList: waitingList;
}

export interface WebSocketResponse {
  waitTimeRange: WaitTimeRange;
  callTime: string; // ISO timestamp
  waitPeople: number;
  waitingStatusCode: string | null;
  isReceptionClose: boolean;
  currentTime: string; // YYYY-MM-DD
  queuesData: QueuesData;
}

export interface WebSocketContextProps {
  data: WebSocketResponse | undefined;
  showJinsDiplay: boolean;
  callingTitleClass: String;
  setCallingTitleClass: Dispatch<SetStateAction<string>>;
  callingNumberClass: String;
  setCallingNumberClass: Dispatch<SetStateAction<string>>;
  callingNumber: string;
  calledList: calledList;
  waitingList: waitingList;
  currentTime: string;
  countryCode: string;
}

export interface WebSocketProviderProps {
  children: React.ReactNode;
}
