const capitalize = (text) => {
  if (text.length === 0) {
    return '';
  }

  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};
export default capitalize;
