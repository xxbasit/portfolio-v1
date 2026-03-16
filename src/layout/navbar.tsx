"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ page }: { page: "home" | "logo" }) => {
  const { scrollY } = useScroll();
  // Background goes from transparent to dark/blur as user scrolls
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.nav
      className="flex w-full select-none items-center justify-between py-3 sticky top-0 z-50 -mx-6 px-6"
      style={{
        backgroundColor: useTransform(
          bgOpacity,
          (v) => `rgba(14, 14, 18, ${v * 0.92})`
        ),
        backdropFilter: useTransform(bgOpacity, (v) =>
          v > 0.05 ? `blur(${v * 12}px)` : "none"
        ),
        borderBottom: useTransform(
          bgOpacity,
          (v) => `1px solid rgba(255,255,255,${v * 0.07})`
        ),
      }}
    >
      <Link href="/" className="text-xl font-extrabold text-white tracking-tight">
        Abdul Basit<span className="text-cyan-400">.</span>
      </Link>

      {/* Desktop nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="hidden md:flex">
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{ padding: "0 0.25rem" }}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
        <motion.a
          href="https://github.com/basitkhan32"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", padding: "0.375rem 1rem" }}
          className="text-sm text-white hover:bg-white/10 transition-colors"
        >
          GitHub ↗
        </motion.a>
      </div>

      {/* Mobile */}
      <a
        href="https://github.com/basitkhan32"
        target="_blank"
        rel="noopener noreferrer"
        className="flex md:hidden text-sm text-gray-400 hover:text-white transition-colors"
      >
        GitHub ↗
      </a>
    </motion.nav>
  );
};

export default Navbar;
