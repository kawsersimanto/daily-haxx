import { Plan } from "@/features/pricing";

interface PlanCardProps {
  plan: Plan;
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="border rounded-xl p-6 bg-white shadow-sm">
      <div className="bg-green-900 text-white p-3 rounded-t-xl">
        <h3 className="text-lg font-bold">{plan.name}</h3>
        <p className="text-2xl">
          ${plan.price} <span className="text-sm">{plan.duration}</span>
        </p>
        {plan.discount && (
          <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">
            {plan.discount}
          </span>
        )}
      </div>
      <ul className="mt-4 space-y-2">
        {plan.features.map((f, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <span>✔</span> {f}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full bg-green-800 text-white py-2 rounded-md">
        {plan.cta}
      </button>
    </div>
  );
}
