"use client";

import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Container from "@/app/components/Container";


type DropdownItem = { label: string; href: string };

type NavItem = {
  label: string;
  href: string;
  columns?: number;
  dropdown?: DropdownItem[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "캠퍼스 소개", href: "/about" },
  {
    label: "사업 영역",
    href: "/services",
    columns: 3,
    dropdown: [
      { label: "정부 교육 사업", href: "/business/curriculum" },
      { label: "기업 교육", href: "/business/corporate-education" },
      { label: "AI 자격인증", href: "/business/ai-certification" },
      { label: "AI 솔루션", href: "/business/ai-solutions" },
      { label: "클라우드", href: "/services/cloud" },
      { label: "컨설팅", href: "/business/consulting" },
    ],
  },
  {
    label: "솔루션",
    href: "/solutions",
    columns: 1,
    dropdown: [
      { label: "AI 활용 역량평가 시스템", href: "/solutions/assessment" },
      { label: "VODA LMS", href: "/solutions/lms" },
    ],
  },
  { label: "소식", href: "/news" },
  { label: "채용", href: "/careers" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const activeItem = NAV_ITEMS.find(
    (item) => item.label === openMenu && item.dropdown
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-[rgba(14,27,82,0.08)]">
        <Container className="h-[68px] relative flex items-center justify-between">        <Link href="/" className="shrink-0 flex items-center">
          <img
            src="/voda-logo-color.svg"
            alt="VODA Works"
            className="h-8 w-auto object-contain"
          />
        </Link>

      {/* Center nav links */}
<div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
  {NAV_ITEMS.map((item) => (
    <div
      key={item.label}
      className="relative"
      onMouseEnter={() => handleEnter(item.label)}
      onMouseLeave={handleLeave}
    >
      {item.dropdown ? (
        <span
          className={`nl text-sm font-medium transition-colors ${
            openMenu === item.label ? "text-[#0e1b52]" : "text-[#5a6895]"
          }`}
        >
          {item.label}
        </span>
      ) : (
        <Link
          href={item.href}
          className={`nl text-sm font-medium transition-colors ${
            openMenu === item.label ? "text-[#0e1b52]" : "text-[#5a6895]"
          }`}
        >
          {item.label}
        </Link>
      )}
    </div>
  ))}

          {/* Dropdown card — centered on the nav's own center, not on any single item */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ease-out ${
              activeItem
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
            onMouseEnter={() => activeItem && handleEnter(activeItem.label)}
            onMouseLeave={handleLeave}
          >
            {activeItem?.dropdown && (
              <div
                className={`bg-white rounded-[28px] shadow-[0_20px_45px_-12px_rgba(14,27,82,0.22)] p-7 ${
                  activeItem.columns === 3 ? "w-[440px]" : "w-[300px]"
                }`}
              >
                <div
                  className={`grid gap-x-8 gap-y-5 ${
                    activeItem.columns === 3 ? "grid-cols-3" : "grid-cols-1"
                  }`}
                >
                  {activeItem.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="text-[15px] font-semibold text-[#0e1b52] hover:text-[#3049c4] transition-colors whitespace-nowrap"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-semibold px-5 py-2.5 border border-[rgba(14,27,82,0.2)] rounded text-[#0e1b52] hover:bg-[#eef2ff] transition-colors"
          >
            사업문의
          </Link>
        </div>

        <button
          className="md:hidden text-[#0e1b52]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[rgba(14,27,82,0.08)] px-8 py-6 space-y-1 max-h-[calc(100vh-68px)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <MobileNavGroup key={item.label} item={item} />
          ))}
          <div className="pt-3 border-t border-[rgba(14,27,82,0.08)] flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-semibold px-4 py-2 border border-[rgba(14,27,82,0.2)] rounded"
            >
              사업문의
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileNavGroup({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.dropdown) {
    return (
      <Link
        href={item.href}
        className="block text-sm font-medium text-[#5a6895] hover:text-[#0e1b52] py-2"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="py-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm font-medium text-[#5a6895] hover:text-[#0e1b52] py-2"
      >
        {item.label}
        <span
          className={`text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>
      {open && (
        <div className="pl-3 pt-1 pb-2 space-y-1">
          {item.dropdown.map((sub) => (
            <Link
              key={sub.label}
              href={sub.href}
              className="block text-sm text-[#0e1b52]/80 hover:text-[#0e1b52] py-1.5"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}