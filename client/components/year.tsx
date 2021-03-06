import React, { FunctionComponent, useState } from "react";

import type { Work } from "@interfaces/work";
import Row from "@components/row";
import styles from "@styles/year.module.scss";
import { useRouter } from "next/router";
import Modal from "./modal";
import Project from "@pages/projects/[slug]";

interface Props {
  title: string;
  works: Work[];
}

const Year: FunctionComponent<Props> = ({ title, works }) => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  const Line = () => {
    return (
      <div className={styles.line}>
        <div className={styles.cell}>
          <div className={styles.border}></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.border}></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.border}></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.border}></div>
        </div>
        <div className={styles.cell}>
          <div className={styles.border}></div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div
        className={
          opened ? [styles.header, styles.opened].join(" ") : styles.header
        }
        onClick={() => setOpened(!opened)}
      >
        <div className={styles.wrapper}>
          <Line />
          <div className={styles.title}>{title}</div>
          <div className={styles.bottom}>
            <Line />
          </div>
        </div>
      </div>
      <div
        className={
          opened ? [styles.body, styles.opened].join(" ") : styles.body
        }
      >
        {works.map((work, index) => {
          return (
            <div key={index}>
              <Row slug={work.slug.current} cells={work.preview} />
              {router.query.slug == work.slug.current && (
                <Modal
                  opened={!!router.query.slug}
                  onClose={() => router.push("/", "/", { scroll: false })}
                >
                  <Project
                    project={{
                      title: work.title,
                      text: work.text,
                      content: work.content,
                    }}
                  />
                </Modal>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Year;
