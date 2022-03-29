import React from "react";
import Head from "next/head";
// import socialImage from "../public/social.jpeg";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  imageSrc?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const DynamicMeta = (props: Props) => {
  const title = props.title ? props.title : "SASHA ZALIVAKO";
  const description = props.description ? props.description : "";
  const url = props.url ? props.url : "http://zalivako.fail/";
  const imageWidth = props.imageWidth ? props.imageWidth : "1200";
  const imageHeight = props.imageHeight ? props.imageHeight : "623";
  // const imageSrc = props.imageSrc
  //   ? props.imageSrc
  //   : `https://radio.syg.ma${socialImage.src}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      {/* <meta property="og:image" content={imageSrc} /> */}
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      {/* <meta name="twitter:image" content={imageSrc} /> */}
      <meta name="twitter:image:width" content={imageWidth} />
      <meta name="twitter:image:height" content={imageHeight} />
      <meta name="twitter:description" content={description} />
      {/* <link rel="image_src" href={imageSrc} /> */}
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default DynamicMeta;
