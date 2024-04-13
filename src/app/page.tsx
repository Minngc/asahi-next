"use client";

import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import "./global.scss";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          router.push("/home");
        }}
        className={classNames(styles.container)}
      >
        <div className={classNames(styles.title)}>
          <Link className={classNames(styles.link)} href={"/home"}>
            - Asahi -
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
