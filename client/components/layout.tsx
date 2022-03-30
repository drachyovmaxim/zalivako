import React from "react";

import Header from "@components/header";
import CommonMeta from "@components/common_meta";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <CommonMeta />
      <Header />
      <main>{children}</main>
    </>
  );
}
