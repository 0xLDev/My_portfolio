/* eslint-disable @next/next/no-img-element */
import cx from "classnames";
import { useRouter } from "next/router";
import { FC } from "react";

import { useCssVariable } from "../../shared/hooks/useCssVariable";
import { Offset, useMouseOffset } from "../../shared/hooks/useMouseOffset";

import styles from "./styles.module.scss";

let lastOffset: Offset = [0, 0];

export const Header: FC<{
  titleClassName?: string;
  className?: string;
  title: string;
  image: string;
}> = ({ titleClassName, className, title, image }) => {
  const offset = useMouseOffset({
    initialState: lastOffset,
    onSetOffset: (offset) => (lastOffset = offset),
    max: 4,
    min: -4,
  });
  const router = useRouter();
  const primary = useCssVariable("--primary", "transparent");
  const routerPathParts = router.pathname.split("/");

  return (
    <header className={cx(styles.header, className)}>
      <h1
        className={cx(styles.title, titleClassName)}
        style={{
          textShadow: `${offset[0]}px ${offset[1]}px ${primary}`,
        }}
      >
        {title}
      </h1>
      <span className={styles.path}>
        {routerPathParts.map((path, index) => (
          <span
            key={index}
            onClick={() => {
              router.push(routerPathParts.slice(0, index + 1).join("/") || "/");
            }}
          >
            {path || (index === 0 ? "/" : null)}
          </span>
        ))}
      </span>
      <img
        src={image}
        className={styles.avatar}
        alt={"my photo"}
        style={{
          boxShadow: `${offset[0]}px ${offset[1]}px`,
        }}
      />
    </header>
  );
};
