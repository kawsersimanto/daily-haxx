import { Plan } from "@/features/pricing";

export const plans: { monthly: Plan[]; yearly: Plan[] } = {
  monthly: [
    {
      name: "Free",
      price: 0,
      duration: "Monthly",
      features: [
        "Daily & weekly newsletter access",
        "Curated news highlights",
        "Weekly summary: Week’s Events",
        "Limited access to polls",
        "Public article archive access",
        "Read anytime, anywhere",
      ],
      cta: "Join for Free",
    },
    {
      name: "Premium",
      price: 19,
      duration: "Monthly",
      discount: "Save 20%",
      features: [
        "Daily & weekly newsletter access",
        "Curated news highlights",
        "Weekly summary: Week’s Events",
        "Limited access to polls",
        "Public article archive access",
        "Read anytime, anywhere",
      ],
      cta: "Get Premium",
    },
  ],
  yearly: [
    {
      name: "Free",
      price: 0,
      duration: "Yearly",
      features: [
        "Daily & weekly newsletter access",
        "Curated news highlights",
        "Weekly summary: Week’s Events",
        "Limited access to polls",
        "Public article archive access",
        "Read anytime, anywhere",
      ],
      cta: "Join for Free",
    },
    {
      name: "Premium",
      price: 89,
      duration: "Yearly",
      discount: "Save 30%",
      features: [
        "Daily & weekly newsletter access",
        "Curated news highlights",
        "Weekly summary: Week’s Events",
        "Limited access to polls",
        "Public article archive access",
        "Read anytime, anywhere",
      ],
      cta: "Get Premium",
    },
  ],
};
