import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Footer = ({ page }: { page: "home" | "logo" }) => {
  return (
    <footer className="flex w-full items-center justify-between pt-8 border-t border-white/8 mt-8">
      <p className="text-gray-600 text-xs">
        © {new Date().getFullYear()} Abdul Basit Khan
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://linkedin.com/in/basit-pmp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={18} />
        </a>
        <a
          href="https://github.com/basitkhan32"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <FiGithub size={18} />
        </a>
        <a
          href="mailto:work.basitkhan@gmail.com"
          className="text-gray-500 hover:text-white transition-colors"
          aria-label="Email"
        >
          <FiMail size={18} />
        </a>
        <a
          href="https://wa.me/923000032320"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-400 transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
