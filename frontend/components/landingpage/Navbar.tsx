'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const inPageLinks = [
    { label: 'Features', targetId: '/#features' },
    { label: 'Pricing', targetId: '/#pricing' },
    { label: 'Integrations', targetId: '/#integrations' },
    { label: 'Enterprise', targetId: '/#enterprise' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0E1320]/60 backdrop-blur-lg transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Brand Logo and Name */}
        <div className="flex items-center z-50">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg text-xl font-bold text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            {/* Native Tailwind v4 Animated SVG */}
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 14.76 3.12 17.26 4.93 19.07"
                className="animate-draw stroke-[#4F46E5] stroke-[2.5] stroke-linecap-round [stroke-dasharray:70] [stroke-dashoffset:70]"
              />
              <path
                d="M22 12C22 6.48 17.52 2 12 2"
                className="animate-fadeIn stroke-[#10B981] stroke-[2.5] stroke-linecap-round opacity-0 [animation-delay:1.2s]"
                style={{ strokeDasharray: '1 4' }}
              />
              <path
                d="M19.07 4.93C20.88 6.74 22 9.24 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12"
                className="animate-draw stroke-[#4F46E5] stroke-[2.5] stroke-linecap-round [stroke-dasharray:70] [stroke-dashoffset:70]"
              />
              <path
                d="M6 17L11 12L15 16L22 7"
                className="animate-draw stroke-[#10B981] stroke-3 stroke-linecap-round stroke-linejoin-round [animation-delay:0.5s] [animation-duration:1s] [stroke-dasharray:40] [stroke-dashoffset:40]"
              />
              <path
                d="M17 7H22V12"
                className="animate-draw stroke-[#10B981] stroke-3 stroke-linecap-round stroke-linejoin-round [animation-delay:1.2s] [animation-duration:0.5s] [stroke-dasharray:20] [stroke-dashoffset:20]"
              />
            </svg>

            {/* Brand Text */}
            <span className="tracking-tight text-shadow-sm text-shadow-[#4F46E5]/50">
              Omni<span className="text-[#4F46E5]">Leads</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="m-0 hidden list-none items-center gap-8 p-0 md:flex lg:gap-10">
          {inPageLinks.map((link) => (
            <li key={link.targetId}>
              <Link
                href={link.targetId}
                className="group relative inline-block rounded-md py-2 text-sm font-medium text-[#E5E4E2] transition-colors duration-200 hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-[#6366F1] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Links */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/auth/sign-in"
            className="rounded-md border border-[#1E293B] px-4 py-2 text-sm font-medium text-[#E5E4E2] transition-all hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          >
            Login
          </Link>
          <Link
            href="/auth/sign-up"
            className="rounded-md bg-[#4F46E5] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4338CA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1320]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="flex rounded-md p-2 text-[#E5E4E2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-t border-[#1E293B] bg-[#0E1320] md:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {inPageLinks.map((link) => (
              <li key={link.targetId}>
                <Link
                  href={link.targetId}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium text-[#E5E4E2] hover:text-[#6366F1]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="flex flex-col gap-3 border-t border-[#1E293B] pt-4">
              <Link
                href="/auth/sign-in"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-md border border-[#1E293B] px-4 py-2 text-center text-sm font-medium text-[#E5E4E2] hover:bg-white/5"
              >
                Login
              </Link>
              <Link
                href="/auth/sign-up"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-md bg-[#4F46E5] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#4338CA]"
              >
                Get Started
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
