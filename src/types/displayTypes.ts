import { calledList } from "./callingTypes";
import { waitingList } from "./waitingTypes";

export interface DisplayProps {
  calling: string;
  waiting: waitingList;
  called: calledList;
}
