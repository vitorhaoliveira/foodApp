import Link from "next/link";
import Image from "next/image";
import HeaderBg from "./HeaderBg";

import logoImg from "@/assets/logo.png";
import classes from "@/components/styles/Header/Header.module.css"
import NavLink from "./NavLink/NavLink";

function Header() {
  return (
    <>
      <HeaderBg />
      <header className={classes.header}>
        <Link className={classes.logo} href="/ ">
          <Image src={logoImg} alt="Prato com comida" priority />
          App Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Navegue pelas refeições</NavLink>
            </li>
            <li>
              <NavLink href="/community">Comunidade gastronômica</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
