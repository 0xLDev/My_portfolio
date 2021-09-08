import Head from "next/head";
import Link from "next/link";

import { Text } from "../../components/Text";
import { useMouseOffset } from "../../shared/hooks/useMouseOffset";

import styles from "./styles.module.scss";

export default function NotFound() {
  const offset = useMouseOffset({
    initialState: [0, 0],
    min: -10,
    max: 10,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>not found</title>
      </Head>
      <a
        href={"https://developer.mozilla.org/en-US/docs/Glossary/404"}
        className={styles.notFoundLink}
        target={"_blank"}
        style={{
          transform: `translate(calc(-50% - ${offset[0] * -1}px), calc(-50% - ${
            offset[1] * -1
          }px))`,
        }}
        rel="noreferrer"
      >
        404 😢
      </a>
      <Text highlight className={styles.goToMain}>
        <Link href={"/"}>Home</Link>
      </Text>
    </div>
  );
}
