import Link from "next/link";
import Image from "next/image";
import classes from "../styles/Header/Header.module.css";
import HeaderBg from "./HeaderBg";

import logoImg from "@/assets/logo.png";

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
              <Link href="/meals">Navegar pelas refeições</Link>
            </li>
            <li>
              <Link href="/community">Comunidade gastronômica</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
