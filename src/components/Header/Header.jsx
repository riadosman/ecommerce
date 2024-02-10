"use client";
import { useState } from "react";
import style from "./header.module.css";
import Link from "next/Link";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.header}>
      <img
        src="https://picsum.photos/200/200"
        alt=""
        className={`rounded-full ${style.logo}`}
      />
      <ul className={style.nav_ul}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {open && (
        <ul className={style.nav_mobile_ul}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
      <button className={style.login}>Login</button>
      <div
        className={style.hamburger_menu}
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
    </div>
  );
};

export default Header;
