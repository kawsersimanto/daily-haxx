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
