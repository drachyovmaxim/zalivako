import React, { FunctionComponent } from "react";
import Link from "next/link";

import Row from "@components/row";
// import styles from "@styles/sections/features.module.scss";

interface Props {
  title: string;
  works: any;
}

const Year: FunctionComponent<Props> = ({ title, works }) => {
  // console.log(works);

  return (
    <div>
      <div>{title}</div>
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
