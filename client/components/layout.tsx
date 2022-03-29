import React from "react";
import { useRouter } from "next/router";

// import Header from "@components/header";
// import styles from "@styles/layout.module.scss";
import CommonMeta from "@components/common_meta";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const router = useRouter();
  const pathName = router.pathname;
  const isIndexPage = pathName == "/";
  const locale = router.locale;

  return (
    <>
      <CommonMeta />

      <div className={locale == "ka" ? "lang-ka" : "lang-en"}>
        {/* <Header isIndexPage={isIndexPage} /> */}
        <main>{children}</main>
      </div>
    </>
  );
}
