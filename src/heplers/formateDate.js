export const formatDate = (date) => {
  return new Date(date)
    .toLocaleDateString("en-GB", {
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ".");
};
