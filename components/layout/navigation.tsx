export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Academy",
    href: "/academy",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Campaigns",
    href: "/campaigns",
  },
  {
    label: "Partners",
    href: "/partners",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const navigationAction = {
  label: "Join Huzali Academy",
  href: "/academy/join",
} as const;
