import { IMenu } from "@/shared/navbar";

export const menu: IMenu[] = [
  {
    label: "Articles",
    href: "/article",
  },
  {
    label: "Newsletters",
    href: "/newsletter",
  },
  {
    label: "Polls",
    href: "/poll",
  },
  {
    label: "Resources",
    children: [
      { label: "Drug Database", href: "/resources/drug-database" },
      { label: "Catalyst Calendar", href: "/resources/catalyst-calendar" },
    ],
  },
];

export const mobileMenu: IMenu[] = [
  ...menu,
  {
    label: "Subscribe",
    children: [
      { label: "Free", href: "/profile" },
      { label: "Premium", href: "/profile" },
    ],
  },
  {
    label: "My Account",
    children: [
      { label: "Profile", href: "/profile" },
      { label: "Billing", href: "/payment/manage" },
      { label: "Logout", isButton: true },
    ],
  },
];
