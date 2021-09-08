import cx from "classnames";
import React, { FC } from "react";

import { ActiveLink } from "../ActiveLink";

import styles from "./styles.module.scss";

type NavBarProps = {
  className?: string;
};

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <nav className={cx(styles.nav, className)}>
      <ul>
        <li>
          <ActiveLink href={"/about-me"}>About me</ActiveLink>
        </li>
        <li>
          <ActiveLink href={"/contact-me"}>Contact</ActiveLink>
        </li>
        <li>
          <a
            href={"https://hh.ru/resume/fc101b80ff088eb45f0039ed1f556666494579"}
            target="_blank"
            rel="noreferrer"
          >
            My resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
