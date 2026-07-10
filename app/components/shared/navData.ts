export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: "캠퍼스소개", href: "/" },
  {
    label: "사업영역",
    href: "/business/curriculum",
    children: [{ label: "교육과정", href: "/business/curriculum" }],
  },
  { label: "솔루션", href: "/" },
  { label: "소식", href: "/" },
  { label: "채용", href: "/careers" },
];
