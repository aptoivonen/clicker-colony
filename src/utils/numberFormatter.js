/**
 * Takes a number or resource object, divides integers by 100.
 * If it has any remainder, shows one decimal and integer otherwise.
 * Returns a string for each number.
 * @param {number | object} numberOrResourceObject input number or resource object
 * @return {string | object} string or object with string values
 */
export const formatNumber = (numberOrResourceObject) => {
  if (typeof numberOrResourceObject === "number") {
    const number = numberOrResourceObject;
    return format(number);
  }

  if (typeof numberOrResourceObject === "object") {
    return Object.fromEntries(
      Object.entries(numberOrResourceObject).map(([key, value]) => [
        key,
        format(value),
      ])
    );
  }
};

/**
 * Helper for format function.
 * @param {number} number
 * @returns {string}
 */
const format = (number) => {
  const decimals = number % 100 === 0 ? 0 : 1;
  let result = number / 100;
  return result.toFixed(decimals);
};
