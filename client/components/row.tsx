import React, { FunctionComponent } from "react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";

import sanity from "@lib/sanity";
import TextParser from "@components/text_parser";
import styles from "@styles/row.module.scss";

interface Props {
  slug: string;
  cells: any;
}

const CellImage = ({ image }: { image: { alt: string } }) => {
  const imageProps = useNextSanityImage(sanity, image, {
    enableBlurUp: false,
  });

  return <Image {...imageProps} layout="responsive" alt={image.alt} />;
};

const Row: FunctionComponent<Props> = ({ cells, slug }) => {
  // console.log(cells);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={"/works/" + slug}>
          <a className={styles.link}>
            {cells?.map((cell: any, index: number) => {
              return (
                <div key={index} className={styles.cell}>
                  <div className={styles.body}>
                    {cell._type == "empty" && <div></div>}
                    {cell._type == "blockText" && (
                      <TextParser data={cell.text} />
                    )}
                    {/* {console.log(cell)} */}
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
                        <CellImage image={cell} />
                      </div>
                    )}
                  </div>
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
