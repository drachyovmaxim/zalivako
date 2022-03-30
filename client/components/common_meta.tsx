import React from "react";
import Head from "next/head";

const CommonMeta = () => {
  return (
    <Head>
      <meta name="referrer" content="origin" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta name="keywords" content="zalivako portfolio" />
      <meta name="theme-color" content="#fff" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="http://zalivako.fail/" />
      <meta property="og:locale" content="en_US" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=block"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon-precomposed"
        href="/icons/apple-touch-icon-precomposed.png"
      />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        href="/icons/android-icon-192x192.png"
        sizes="192x192"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/icons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/icons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-icon-180x180.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/icons/ms-icon-144x144.png"
      />
      <meta name="apple-mobile-web-app-title" content="selfstudio" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
  );
};

export default CommonMeta;
