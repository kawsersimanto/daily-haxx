export type TMenu = {
  label: string;
  href?: string;
  children?: {
    label: string;
    href?: string;
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
