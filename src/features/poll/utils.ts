export const calculatePercentage = (
  optionVotes: number,
  totalVotes: number
): number => {
  if (totalVotes === 0) return 0;
  return parseFloat(((optionVotes / totalVotes) * 100).toFixed(2));
};
