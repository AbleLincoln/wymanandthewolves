import { format } from "date-fns";

export function formatDate(date) {
  const _date = date.toDate();
  if (_date == "Invalid Date") return date;
  const dayOfWeek = format(_date, "cccc");
  const month = format(_date, "MMMM");
  const dayOfMonth = format(_date, "do");

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}

export function formatOrdinal(date) {
  return date.replace(/(\D+)/, "<sup>$1</sup>");
}
