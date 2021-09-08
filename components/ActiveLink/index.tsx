import cx from "classnames";
import { useRouter } from "next/router";
import React, { ReactNode, useCallback, MouseEvent } from "react";

import styles from "./styles.module.scss";

export function ActiveLink({
  children,
  href,
}: {
  children?: ReactNode;
  href: string;
  className?: string;
}) {
  const router = useRouter();

  const handlePushRoute = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      router.push(href);
    },
    [router, href],
  );

  return (
    <a
      href={href}
      onClick={handlePushRoute}
      className={cx(styles.link, {
        active: router.asPath === href,
      })}
    >
      {children}
    </a>
  );
}
