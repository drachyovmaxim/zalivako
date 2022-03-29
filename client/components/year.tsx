import React, { FunctionComponent } from "react";
import Link from "next/link";

import Row from "@components/row";
import styles from "@styles/year.module.scss";

interface Props {
  title: string;
  works: any;
}

const Year: FunctionComponent<Props> = ({ title, works }) => {
  console.log(works);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {" "}
        <div className={styles.title}>{title}</div>
      </div>
      <div>
        {works.map((work: any, index: number) => {
          return (
            <div key={index}>
              {/* <div>{work.title}</div> */}
              <Row slug={work.slug.current} cells={work.preview} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Year;
