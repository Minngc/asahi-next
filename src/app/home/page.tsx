"use client"

import  {useRouter, RedirectType } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const Router = useRouter()
  useEffect(() => {
    Router.replace("/")
  });
  return <></>;
}
