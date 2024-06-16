"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/resume", name: "Resume" },
  { path: "/works", name: "Works" },
  { path: "/contacts", name: "Contacts" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
