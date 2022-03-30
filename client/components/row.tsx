import React, { FunctionComponent } from "react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";

import imageUrlFor from "@lib/image_url_for";
import sanity from "@lib/sanity";
import type { Cell } from "@interfaces/cell";
import TextParser from "@components/text_parser";
import styles from "@styles/row.module.scss";

interface Props {
  slug: string;
  cells: Cell[];
}

const CellImage = ({ image }: { image: { alt: string } }) => {
  const imageProps = useNextSanityImage(sanity, image, {
    enableBlurUp: false,
  });

  return (
    <Image
      src={imageUrlFor(image).url()}
      width={imageProps.width}
      height={imageProps.height}
      layout="responsive"
      alt={image.alt}
    />
  );
};

const Row: FunctionComponent<Props> = ({ cells, slug }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={`/?slug=${slug}`} as={"/projects/" + slug} scroll={false}>
          <a className={styles.link}>
            {cells?.map((cell, index) => {
              return (
                <div
                  key={index}
                  className={
                    cell._type == "empty"
                      ? [styles.cell, styles.empty].join(" ")
                      : styles.cell
                  }
                >
                  <div className={styles.body}>
                    {cell._type == "empty" && <div></div>}
                    {cell._type == "blockText" && (
                      <div
                        className={
                          cell.position == "center"
                            ? [styles["text-wrapper"], styles.center].join(" ")
                            : cell.position == "bottom"
                            ? [styles["text-wrapper"], styles.bottom].join(" ")
                            : styles["text-wrapper"]
                        }
                        style={{
                          width: cell.width && cell.width + "%",
                          marginTop: cell.spacingTop && cell.spacingTop + "px",
                          marginBottom:
                            cell.spacingBottom && cell.spacingBottom + "px",
                          fontSize: cell.fontSize && cell.fontSize + "px",
                          lineHeight: cell.lineHeight && cell.lineHeight + "px",
                        }}
                      >
                        <TextParser data={cell.text} />
                      </div>
                    )}
                    {cell._type == "image" && (
                      <div
                        className={
                          cell.position == "center"
                            ? [styles["image-wrapper"], styles.center].join(" ")
                            : cell.position == "bottom"
                            ? [styles["image-wrapper"], styles.bottom].join(" ")
                            : styles["image-wrapper"]
                        }
                        style={{
                          width: cell.width && cell.width + "%",
                          marginTop: cell.spacingTop && cell.spacingTop + "px",
                          marginBottom:
                            cell.spacingBottom && cell.spacingBottom + "px",
                        }}
                      >
                        <div>
                          <CellImage image={cell} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {cells.length < 5 &&
              [...Array(5 - cells.length)].map((_, i) => {
                return (
                  <div
                    key={i}
                    className={[styles.cell, styles.empty].join(" ")}
                  >
                    <div className={styles.body}></div>
                  </div>
                );
              })}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Row;
