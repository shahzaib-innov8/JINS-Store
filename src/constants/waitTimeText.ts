import { WaitTimeInfo, WaitTimeText } from "../types/waitingTypes";

export const defaultWaitTimeText: WaitTimeInfo = {
  heading: "",
  subheadings: [],
};
export const waitTimeText: WaitTimeText = {
  us: {
    heading: "Reception Wait Time",
    subheadings: ["Reception", "Wait", "Time"],
  },
  mn: {
    heading: "Eye Exam Wait Time",
    subheadings: ["Eye Exam", "Wait", "Time"],
  },
};
