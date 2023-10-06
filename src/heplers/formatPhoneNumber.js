export const formatPhoneNumber = (value) => {
  if (!value) return value;
  const cleaned = ("" + value).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{1,3})(\d{0,2})(\d{0,3})(\d{0,4})$/);
  if (match) {
    const formatCode = match[1].length >= 3 ? "+" : "";
    return [formatCode + match[1], match[2], match[3], match[4]]
      .filter(Boolean)
      .join(" ");
  }
  return value;
};
