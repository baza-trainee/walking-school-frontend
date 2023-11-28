export const dateChecker = (date) => {
  if (!date) {
    return true;
  }

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const endDateString = date.split(" - ")[1];
  const [endMonth] = endDateString.split(".");

  return currentMonth <= parseInt(endMonth, 10);
};
