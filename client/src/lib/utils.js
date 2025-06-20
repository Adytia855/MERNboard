/**
 * @function formatDate
 * @description Formats a Date object into a human-readable string using the 'en-US' locale.
 * The format is typically "Month Day, Year" (e.g., "Jan 1, 2023").
 * @param {Date} date - The Date object to format.
 * @returns {string} The formatted date string.
 * @example
 * const myDate = new Date('2023-01-01T10:00:00Z');
 * const formatted = formatDate(myDate); // Returns "Jan 1, 2023"
 */
export function formatDate(date){
  return date.toLocaleDateString('en-US', {
    month: "short", // e.g., "Jan"
    day: "numeric", // e.g., "1"
    year: "numeric", // e.g., "2023"
  });
}
