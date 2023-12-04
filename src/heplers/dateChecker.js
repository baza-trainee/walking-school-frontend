/**
 * Checks whether the current date is less than or equal to the project's end date.
 * The end date of the project is provided in the format "MM.YYYY - MM.YYYY".
 *
 * If the provided date string is empty or null, the function returns true,
 * implying that there is no restriction based on the end date.
 *
 * @param {string} date - The date string representing the start and end dates of the project, separated by " - ".
 *                        For example, "11.2023 - 12.2023".
 * @returns {boolean} - Returns true if the current date is before or in the same month and year as the end date;
 *                      returns false otherwise.
 */

export const dateChecker = (date) => {
  if (!date) {
    return true;
  }

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const endDateString = date.split(" - ")[1];
  const [endMonth, endYear] = endDateString.split(".");

  const endMonthNum = parseInt(endMonth, 10);
  const endYearNum = parseInt(endYear, 10);

  if (
    currentYear < endYearNum ||
    (currentYear === endYearNum && currentMonth <= endMonthNum)
  ) {
    return true;
  }

  return false;
};
