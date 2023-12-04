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
