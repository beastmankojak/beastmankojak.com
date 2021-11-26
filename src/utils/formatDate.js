const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const [locale] = navigator.languages || ["en-US"];
  return `${date.toLocaleDateString(locale)} ${date.toLocaleTimeString(
    locale
  )}`;
};

export default formatDate;