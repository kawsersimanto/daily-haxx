export interface Plan {
  name: string;
  price: number;
  duration: "Monthly" | "Yearly";
  features: string[];
  discount?: string;
  cta: string;
}

export interface PlanCardProps {
  plan: Plan;
  buttonVariant?: "default" | "outline";
}

export interface PlanToggleProps {
  isYearly: boolean;
  onToggle: () => void;
}

export interface PlanListProps {
  plans: Plan[];
}
