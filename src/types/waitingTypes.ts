import { CallingNumber } from "./callingTypes";

export interface WaitTimeRange {
  earliest: number | String;
  latest: number | String;
}

export type waitingList = CallingNumber[];

export type WaitTimeInfo = {
  heading: string;
  subheadings: string[];
};

export type WaitTimeText = Record<string, WaitTimeInfo>;

