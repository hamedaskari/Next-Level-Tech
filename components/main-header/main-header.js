import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="" priority />
          NextLevel Tech
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/posts">Browse Posts</NavLink>
            </li>
            <li>
              <NavLink href="/community">NextLevel Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
