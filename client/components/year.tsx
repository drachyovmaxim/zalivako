import React, { FunctionComponent } from "react";
import Link from "next/link";

// import styles from "@styles/sections/features.module.scss";

interface Props {
  title: string;
  works: any;
}

const Year: FunctionComponent<Props> = ({ title, works }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {works.map((work: any, index: number) => {
          return (
            <div key={index}>
              <Link href={"/works/" + work.slug.current}>
                <a
                // className={styles.link}
                // onClick={() => handleMenuVisibility()}
                >
                  <div>{work.title}</div>
                  <div>{work.year}</div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Year;
