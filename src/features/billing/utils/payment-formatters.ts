/**
 * Payment form formatting utilities
 * Provides functions to format card numbers and expiry dates for user input
 */

/**
 * Formats a card number with spaces every 4 digits
 * @param value - Raw card number input (may contain spaces, letters, etc.)
 * @returns Formatted card number (e.g., "1234 5678 9012 3456")
 *
 * @example
 * formatCardNumber("1234567890123456") // "1234 5678 9012 3456"
 * formatCardNumber("1234 abcd 5678") // "1234 5678"
 */
export const formatCardNumber = (value: string): string => {
  const cleanedValue = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const digitMatches = cleanedValue.match(/\d{4,16}/g);
  const validDigits = (digitMatches && digitMatches[0]) || "";

  const digitGroups: string[] = [];
  const groupSize = 4;

  for (let i = 0; i < validDigits.length; i += groupSize) {
    const group = validDigits.substring(i, i + groupSize);
    digitGroups.push(group);
  }

  // Return formatted string with spaces, or original cleaned value if no valid groups
  return digitGroups.length > 0 ? digitGroups.join(" ") : cleanedValue;
};

/**
 * Formats expiry date in MM / YY format
 * @param value - Raw expiry date input (may contain spaces, letters, etc.)
 * @returns Formatted expiry date (e.g., "12 / 25")
 *
 * @example
 * formatExpiryDate("1225") // "12 / 25"
 * formatExpiryDate("12") // "12"
 * formatExpiryDate("1") // "1"
 */
export const formatExpiryDate = (value: string): string => {
  const cleanedValue = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const minimumDigitsForFormatting = 2;
  const monthDigits = 2;
  const yearDigits = 2;

  if (cleanedValue.length >= minimumDigitsForFormatting) {
    const month = cleanedValue.substring(0, monthDigits);
    const year = cleanedValue.substring(monthDigits, monthDigits + yearDigits);
    return `${month} / ${year}`;
  }

  return cleanedValue;
};
