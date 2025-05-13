import config from '../config.json'
import dayjs from "dayjs";
import timezonePlugin from "dayjs/plugin/timezone";
import utcPlugin from "dayjs/plugin/utc";
dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);

export const getTime = (time: string = '') => {
  return dayjs.utc(time).tz(config.timezone).format("h:mm a");
};