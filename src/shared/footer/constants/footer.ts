interface IFooter {
  title: string;
  links: { label: string; href: string }[];
}

export const Join: IFooter = {
  title: "Join",
  links: [
    { label: "Upgrade", href: "/upgrade" },
    { label: "Subscribe", href: "/subscribe" },
    { label: "Sponsor Us", href: "/sponsor" },
    { label: "Contact us", href: "/contact" },
  ],
};

export const Home: IFooter = {
  title: "Home",
  links: [
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms & use", href: "/terms" },
  ],
};

export const Explore: IFooter = {
  title: "Explore",
  links: [
    { label: "Newsletters", href: "/newsletters" },
    { label: "Premium", href: "/premium" },
  ],
};

export const policy: IFooter = {
  title: "Policy",
  links: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions ", href: "/terms-conditions " },
  ],
};

export const footerSections = [Join, Home, Explore];
