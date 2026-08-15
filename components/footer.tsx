"use client";

import Link from "next/link";
import Image from "next/image";
import {
  quickLinks,
  homeLinks,
  featureLinks,
  moreFeatureLinks,
} from "@/constants/footer-links";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-r from-[#eef1ff] via-white to-[#e9edff] border-t border-slate-100">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-32 bottom-45 h-100 w-100 rounded-full bg-[#d9defb]/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[repeat(13,minmax(0,1fr))] gap-y-10 lg:gap-x-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4 space-y-4">
            <Link
              href="#home"
              className="inline-flex items-start"
              aria-label="Dashen Super App"
            >
              <Image
                src="/images/logo.svg"
                alt="Dashen Bank Super App"
                width={500}
                height={500}
                className="w-20 object-contain"
              />
            </Link>

            <p className="text-[13px] leading-[1.75] text-[#686d82] max-w-sm">
              Empowering your everyday banking experience with innovation,
              reliability, and trust—Dashen Bank is committed to shaping the
              future of digital finance, delivering convenient, secure, and
              transformative banking solutions for individuals and businesses
              across Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="mb-5 text-[13px] font-semibold text-[#686d82] uppercase tracking-wider">
              QUICK LINKS
            </h3>
            <div className="flex flex-col gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[13px] font-medium text-[#171a2e] transition-colors duration-200 hover:text-[#2f3597]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Home */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="mb-5 text-[13px] font-semibold text-[#686d82] uppercase tracking-wider">
              HOME
            </h3>
            <div className="flex flex-col gap-y-2">
              {homeLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[13px] font-medium text-[#171a2e] transition-colors duration-200 hover:text-[#2f3597]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Feature Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3">
            <h3 className="mb-5 text-[13px] font-semibold text-[#686d82] uppercase tracking-wider">
              FEATURE
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex flex-col gap-y-2">
                {featureLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-[13px] font-medium text-[#171a2e] transition-colors duration-200 hover:text-[#2f3597]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-y-2">
                {moreFeatureLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-[13px] font-medium text-[#171a2e] transition-colors duration-200 hover:text-[#2f3597]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="mb-5 text-[13px] font-semibold text-[#686d82] uppercase tracking-wider">
              CONTACT
            </h3>
            <div className="flex flex-col gap-y-2">
              <a
                href="tel:+251115158000"
                className="w-fit text-[13px] font-medium text-[#171a2e] transition-colors duration-200 hover:text-[#2f3597]"
              >
                +251 11 515 8000
              </a>
              <a
                href="mailto:info@dashensuperapp.com"
                className="w-fit text-[13px] font-medium text-[#171a2e] transition-colors duration-200 hover:text-[#2f3597]"
              >
                info@dashensuperapp.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-5 border-t border-[#dfe2ef]/70 pt-6 sm:flex-row sm:items-end lg:mt-12">
          <p className="text-[13px] font-medium text-[#72778b]">
            © {new Date().getFullYear()} — Dashen Super App, All right reserved
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/dashenbankofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#08649c] hover:text-[#2f3597] transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>

            <Link
              href="https://facebook.com/DashenBankOfficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#08649c] hover:text-[#2f3597] transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
