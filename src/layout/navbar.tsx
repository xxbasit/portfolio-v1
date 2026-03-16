import Link from "next/link";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ page }: { page: "home" | "logo" }) => {
  return (
    <nav className="flex w-full select-none items-center justify-between py-2">
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
        <a
          href="https://github.com/basitkhan32"
          target="_blank"
          rel="noopener noreferrer"
          style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", padding: "0.375rem 1rem" }}
          className="text-sm text-white hover:bg-white/10 transition-colors"
        >
          GitHub ↗
        </a>
      </div>

      {/* Mobile: GitHub only */}
      <a
        href="https://github.com/basitkhan32"
        target="_blank"
        rel="noopener noreferrer"
        className="flex md:hidden text-sm text-gray-400 hover:text-white transition-colors"
      >
        GitHub ↗
      </a>
    </nav>
  );
};

export default Navbar;
