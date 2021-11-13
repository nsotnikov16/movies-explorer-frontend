export const editCounter = (width, setCounter, counter) => {
  if (width > 768) setCounter((counter += 4));
  if (width <= 768 && width > 480) setCounter((counter += 2));
  if (width <= 480) setCounter((counter += 2));
};

export const handleCounter = (width, setCounter) => {
  if (width > 768) setCounter(12);
  if (width <= 768 && width > 480) setCounter(8);
  if (width <= 480) setCounter(5);
};
