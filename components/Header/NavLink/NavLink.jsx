"use client";

import Link from "next/link";
import classes from "@/components/styles/Header/NavLink/NavLink.module.css";

import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}
    >
      {children}
    </Link>
  );
}

export default NavLink;
