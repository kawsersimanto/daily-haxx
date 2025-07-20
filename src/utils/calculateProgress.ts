export const calculateProgress = (currentStep: number, totalSteps: number) => {
  return (currentStep / (totalSteps - 1)) * 100;
};
