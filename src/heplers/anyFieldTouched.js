export const anyFieldTouched = (touched) => {
  return Object.values(touched).some((field) => field === true);
};
