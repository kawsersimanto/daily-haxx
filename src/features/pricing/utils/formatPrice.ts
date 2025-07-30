export function formatPrice(amount: number) {
  return amount === 0 ? "$0" : `$${amount}`;
}
