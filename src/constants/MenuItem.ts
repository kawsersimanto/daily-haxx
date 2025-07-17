export type TMenu = {
  label: string;
  href?: string;
  children?: {
    label: string;
    href?: string;
    isButton?: boolean;
  }[];
};

export const MenuItem: TMenu[] = [
  {
    label: "Newsletters",
    href: "/",
  },
  {
    label: "Analysis",
    children: [
      { label: "Market Analysis", href: "/" },
      { label: "Industry Reports", href: "/" },
      { label: "Trend Analysis", href: "/" },
    ],
  },
  {
    label: "Polls",
    href: "/",
  },
  {
    label: "Resources",
    children: [
      { label: "Documentation", href: "/" },
      { label: "Guides", href: "/" },
      { label: "Templates", href: "/" },
      { label: "Support", href: "/" },
    ],
  },
];

export const MobileMenuItem: TMenu[] = [
  ...MenuItem,
  {
    label: "Subscribe",
    children: [
      { label: "Free", href: "/" },
      { label: "Premium", href: "/" },
    ],
  },
  {
    label: "My Account",
    children: [
      { label: "Profile", href: "/" },
      { label: "Billing", href: "/" },
      { label: "Settings", href: "/" },
      { label: "Logout", isButton: true },
    ],
  },
];
