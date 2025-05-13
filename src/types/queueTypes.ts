import { ReactNode } from "react";
import { calledList } from "./callingTypes";
import { waitingList } from "./waitingTypes";

export interface QueueDisplayProps {
  calledList: calledList;
  waitingList: waitingList;
}
export interface containerProps {
    style: string
    children: ReactNode
}
export interface titleProps {
  title: string;
  style: string
}
export interface QueueGridProps {
  list: calledList | waitingList;
  textColor: string;
  bgColor: string;
  gridClass: string;
}
