import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const monthNameToNumber = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getOrdinal(n) {
  let ord = "th";

  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }

  return ord;
}

export function isDateInThePast(dateStr) {
  const [day, month, year] = dateStr.split("/");
  const eventDate = new Date(`${year}-${month}-${day}`);

  // Remove time component for accurate comparison
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return eventDate < currentDate;
}
export function isMonthInThePast(month) {
  const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-based

  // Convert given month to a number
  const monthNumber = monthNameToNumber[month] || parseInt(month, 10); // Handles string numbers or month name

  // Check if the given month is in the past
  return monthNumber < currentMonth;
}

export function getDayOfWeek(dateStr) {
  const [day, month, year] = dateStr.split("/");
  const date = new Date(`${year}-${month}-${day}`);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayIndex = date.getDay(); // Returns 0-6, where 0 is Sunday

  return dayNames[dayIndex];
}
