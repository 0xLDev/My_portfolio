import dayjs from "dayjs";

export const enum DateFormat {
  FullYear = "YYYY",
  Date = "MM/DD/YYYY",
}

export const formatDate = (date: Date | string, format: DateFormat) => {
  return dayjs(date).format(format);
};
