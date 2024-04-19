import { toPersianNumbers } from "./FormatNumber";

// Function to convert Gregorian date to Persian date
export default function gregorianToPersian(gregorianDate) {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const date = new Date(gregorianDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Convert Gregorian year to Persian year
  let persianYear = year - 621;
  let persianMonth = persianMonths[month];
  let persianDay = day;

  // Adjust for leap years
  if (month === 11 && day >= 30) {
    persianYear++;
    persianMonth = persianMonths[0];
    persianDay = day - 29;
  } else if (month === 11 && day === 29) {
    const isLeapYear = (persianYear + 38) % 2820 < 682;
    if (isLeapYear) {
      persianYear++;
      persianMonth = persianMonths[0];
      persianDay = 1;
    }
  }

  return `${toPersianNumbers(persianDay)} ${persianMonth} ${toPersianNumbers(
    persianYear
  )}`;
}
