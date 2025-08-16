import valid from "card-validator";

export const formatCardNumber = (value: string): string => {
  const number = value.replace(/\D/g, "");
  const validation = valid.number(number);

  if (!validation.card) {
    return number.substring(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  const type = validation.card.type;

  let formatted = "";
  let groupSizes: number[] = [];

  switch (type) {
    case "american-express":
      groupSizes = [4, 6, 5];
      break;
    case "diners-club":
      groupSizes = [4, 6, 4];
      break;
    default:
      groupSizes = [4, 4, 4, 4];
  }

  let start = 0;
  groupSizes.forEach((size) => {
    if (number.length > start) {
      const end = Math.min(start + size, number.length);
      formatted +=
        number.substring(start, end) + (end < number.length ? " " : "");
      start = end;
    }
  });

  return formatted.trim();
};

export const formatExpiryDate = (value: string): string => {
  const digits = value.replace(/\D/g, "").substring(0, 4);
  if (digits.length <= 2) return digits;

  const month = digits.substring(0, 2);
  const year = digits.substring(2);

  const validMonth = Math.min(parseInt(month, 10), 12)
    .toString()
    .padStart(2, "0");

  return year ? `${validMonth} / ${year}` : validMonth;
};

export const getCardInfo = (cardNumber: string) => {
  const cleanNumber = cardNumber.replace(/\s/g, "");
  const cardValidation = valid.number(cleanNumber);
  return {
    type: cardValidation.card?.type || "unknown",
    cvvLength: cardValidation.card?.code.size || 3,
  };
};
export const handleCardNumberChange = (
  value: string,
  onChange: (v: string) => void
) => onChange(formatCardNumber(value));

export const handleExpiryDateChange = (
  value: string,
  onChange: (v: string) => void
) => onChange(formatExpiryDate(value));
