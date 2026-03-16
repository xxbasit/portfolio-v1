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
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://github.com/basitkhan32"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm border border-white/15 text-white px-4 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          GitHub ↗
        </a>
      </div>
      {/* Mobile */}
      <a
        href="https://github.com/basitkhan32"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden text-sm text-gray-400 hover:text-white transition-colors"
      >
        GitHub ↗
      </a>
    </nav>
  );
};

export default Navbar;
