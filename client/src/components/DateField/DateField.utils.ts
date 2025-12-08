import type { DateRange } from "@mui/x-date-pickers-pro/models";
import { format } from "date-fns";

export const formatDateRange = (range: DateRange<Date>) => {
  const [start, end] = range;

  if (start && !end) return `${format(start, "MMMM d")} -`;
  if (!start || !end) return "Select date range";

  const sameMonth = start.getMonth() === end.getMonth();
  const sameYear = start.getFullYear() === end.getFullYear();

  if (sameMonth && sameYear) {
    // "September 8-12th 2025"
    return `${format(start, "MMMM d")}-${format(end, "do yyyy")}`;
  } else {
    // "December 28th 2024 - January 5th 2025"
    return `${format(start, "MMMM do yyyy")} - ${format(end, "MMMM do yyyy")}`;
  }
};
