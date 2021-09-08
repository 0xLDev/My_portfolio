import cx from "classnames";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { PersonalInfo } from "../../pages/api/data";
import favicon from "../../public/favicon.ico";
import { Header } from "../Header";
import { NavBar } from "../NavBar/NavBar";

import styles from "./styles.module.scss";

export function Layout({
  children,
  title,
  className,
  personalInfo,
}: {
  children?: ReactNode;
  title?: string;
  className?: string;
  personalInfo: PersonalInfo;
}) {
  const router = useRouter();
  const { avatar, firstName, nickname, specialization } = personalInfo;

  return (
    <div
      className={cx(
        styles.container,
        {
          [styles.center]: router.pathname === "/",
        },
        className,
      )}
    >
      <Head>
        <title>{`${nickname}${title ? ` | ${title}` : ""}`}</title>
        <link rel="shortcut icon" href={favicon} />
      </Head>
      <Header
        title={`Hi 👋, I'm ${firstName}, ${specialization}`}
        image={avatar}
      />
      <main className={styles.main}>
        <NavBar className={styles.nav} />
        <section className={styles.content}>{children}</section>
      </main>
    </div>
  );
}
