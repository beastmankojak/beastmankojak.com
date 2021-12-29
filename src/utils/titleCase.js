const titleCase = (str) => {
  const [first, ...rest] = str;
  return [first.toUpperCase(), ...rest].join("");
};
export default titleCase;