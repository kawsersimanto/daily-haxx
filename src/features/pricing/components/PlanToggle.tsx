interface PlanToggleProps {
  isYearly: boolean;
  onToggle: () => void;
}

export const PlanToggle = ({ isYearly, onToggle }: PlanToggleProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={onToggle}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            !isYearly ? "bg-green-900 text-white" : "text-gray-700"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={onToggle}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            isYearly ? "bg-green-900 text-white" : "text-gray-700"
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};
