import Link from "next/link";

const Navbar = ({ page }: { page: "home" | "logo" }) => {
  return (
    <div className="flex w-full select-none items-center justify-between">
      <div className="flex flex-col items-center">
        <Link href={"/"} className="text-2xl font-extrabold">
          Abdul Basit.
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/logo-designs">
          <p className="text-white underline">About</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
