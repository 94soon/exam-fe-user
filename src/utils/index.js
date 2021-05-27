export const getRandomColor = (company) => {
  return "bg-logo-1";
};

export const handleLocation = (location) => {
  return location;
};

export const handleDate = (date) => {
  return date.toString();
};

export const getRandomWidth = () => {
  const number = Math.floor(Math.random() * 12) + 1;
  if (number <= 6) return "w-12/12";
  return "w-11/12";
};
