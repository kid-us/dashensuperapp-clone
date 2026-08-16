"use client";

import { appStoreLinks, navLinks } from "@/constants/nav-links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeRect, setActiveRect] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const activeIdx = navLinks.findIndex((link) => link.url === pathname);
  const targetIdx = hoveredIndex !== null ? hoveredIndex : activeIdx;
  const isDarkPage = pathname === "/";

  useEffect(() => {
    if (
      targetIdx !== -1 &&
      linkRefs.current[targetIdx] &&
      containerRef.current
    ) {
      const targetEl = linkRefs.current[targetIdx];
      if (targetEl) {
        setActiveRect({
          left: targetEl.offsetLeft,
          width: targetEl.offsetWidth,
        });
      }
    } else {
      setActiveRect(null);
    }
  }, [pathname, targetIdx]);

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-colors duration-300 backdrop-blur-md ${
        isDarkPage
          ? "bg-[radial-gradient(circle_at_left_bottom,rgba(57,107,219,0.15)_0%,transparent_50%),radial-gradient(circle_at_right_top,rgba(57,107,219,0.15)_0%,transparent_50%)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-3.5 px-6">
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Dashen Bank"
              width={100}
              height={100}
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* Nav Links - Desktop */}
          <nav
            className={`hidden md:flex backdrop-blur-sm rounded-full px-2 py-1 relative transition-colors duration-300 ${
              isDarkPage ? "bg-black/10" : "bg-slate-100"
            }`}
          >
            <ul
              ref={containerRef}
              className="flex items-center justify-between rounded-full py-2.5 h-10.5 w-141 relative"
            >
              {/* Sliding Active Pill */}
              {activeRect && (
                <div
                  className={`absolute h-9.5 rounded-full transition-all duration-300 ease-out ${
                    isDarkPage ? "bg-white" : "bg-[#0D39A5]"
                  }`}
                  style={{
                    left: `${activeRect.left}px`,
                    width: `${activeRect.width}px`,
                  }}
                />
              )}

              {navLinks.map((link, idx) => {
                const isCurrentActiveOrHovered = targetIdx === idx;
                const isActive = activeIdx === idx;
                const showActiveIndicator = isActive && hoveredIndex !== null;

                return (
                  <Link
                    href={link.url}
                    key={link.name}
                    ref={(el) => {
                      linkRefs.current[idx] = el;
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative z-10 text-[14.5px] font-semibold py-1.5 px-4.5 rounded-full transition-all duration-300 ${
                      isCurrentActiveOrHovered
                        ? isDarkPage
                          ? "text-black"
                          : "text-white"
                        : showActiveIndicator
                          ? isDarkPage
                            ? "bg-white/20 text-white shadow-xs"
                            : "bg-[#0D39A5]/10 text-[#0D39A5] shadow-xs"
                          : isDarkPage
                            ? "text-white/80 hover:text-white"
                            : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </ul>
          </nav>

          {/* Download CTA - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {appStoreLinks.map((app) => (
              <Link
                href={app.url}
                key={app.name}
                className="flex items-center gap-2 border rounded-full px-3 py-1.75 bg-white text-[12px] text-black font-medium shadow hover:bg-slate-400 transition-colors"
              >
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={500}
                  height={500}
                  className="w-5.5"
                />
                <span>{app.name}</span>
              </Link>
            ))}
          </div>

          {/* Hamburger Menu - Tablet/Mobile */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={`p-2.5 rounded-full transition-colors outline-none cursor-pointer ${
                    isDarkPage
                      ? "text-black hover:bg-white/10"
                      : "text-slate-800 hover:bg-black/5"
                  }`}
                  aria-label="Toggle Menu"
                >
                  <Menu className="size-7" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:max-w-sm border-l border-white/10 p-6 flex flex-col justify-between text-white bg-slate-950 bg-[url('/images/mountain-pattern.webp')] bg-cover bg-center"
              >
                {/* Drawer Top Header & Navigation */}
                <div className="space-y-8">
                  {/* Logo */}
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/logo.png"
                      alt="Dashen Bank"
                      width={100}
                      height={100}
                      className="w-12 object-contain"
                    />
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link
                          href={link.url}
                          className={`text-[16px] font-medium tracking-wide py-2.5 px-4 rounded-full transition-all duration-200 ${
                            pathname === link.url
                              ? "bg-white text-slate-950 font-semibold shadow-md shadow-white/5"
                              : "text-slate-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                {/* Drawer Bottom - App Store / Play Store */}
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center mb-3.5 font-bold">
                    Download App
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {appStoreLinks.map((app) => (
                      <Link
                        href={app.url}
                        key={app.name}
                        className="flex items-center justify-center gap-2 border border-black/20 rounded-full px-1 py-2 bg-white text-[11px] text-black"
                      >
                        <Image
                          src={app.icon}
                          alt={app.name}
                          width={20}
                          height={20}
                          className="w-4 h-4 object-contain"
                        />
                        <span>{app.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
