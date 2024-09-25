import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = ({ page }: { page: "home" | "logo" }) => {
  return (
    <div className="flex w-full items-center justify-between px-4 ">
      <div
        style={{
          gap: "1rem",
          transform: "translateY(-20px)",
        }}
        className="flex flex-col space-y-4"
      >
        <a
          href="https://www.linkedin.com/in/basit-pm/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <FiLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com/bas1t_khan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <LuTwitter size={20} />
        </a>
        <a
          href="mailto:work.basitkhan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <MdOutlineMailOutline size={20} />
        </a>
      </div>

      {/* whatsapp number */}
      <div style={{ gap: "10px" }} className="flex items-center">
        <Link href="https://wa.me/923000032320" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} />
          </a>
        </Link>
        <Link href="https://wa.me/923000032320" legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base cursor-pointer"
          >
            +92 300 0032320
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
