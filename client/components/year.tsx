import React, { FunctionComponent } from "react";

import type { Work } from "@interfaces/work";
import Row from "@components/row";
import styles from "@styles/year.module.scss";

interface Props {
  title: string;
  works: Work[];
}

const Year: FunctionComponent<Props> = ({ title, works }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {" "}
        <div className={styles.title}>{title}</div>
      </div>
      <div>
        {works.map((work, index) => {
          return (
            <div key={index}>
              <Row slug={work.slug.current} cells={work.preview} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Year;
