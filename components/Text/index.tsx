import cx from "classnames";
import React, { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

type TextProps = {
  className?: string;
  children?: ReactNode;
  highlight?: boolean;
};

export const Text: FC<TextProps> = ({ className, children, highlight }) => {
  return (
    <span
      className={cx(
        styles.text,
        {
          [styles.highlight]: highlight,
        },
        className,
      )}
    >
      {children}
    </span>
  );
};
