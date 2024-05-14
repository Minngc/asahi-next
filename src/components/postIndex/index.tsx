"use client";

import classNames from "classnames";
import { useContext, ReactNode, useState } from "react";

import styles from "./index.module.scss";
import { MenuStateContext } from "@/app/article/menucontrol";

const PostIndex = (props: { children: ReactNode }) => {
  const hidden = useContext(MenuStateContext);
  return (
    <aside className={classNames(styles.index, { [styles.hidden]: hidden })}>
      {props.children}
    </aside>
  );
};

export { PostIndex };
