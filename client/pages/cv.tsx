import type { NextPage } from "next";
import { format, parse } from "date-fns";

import sanity from "@lib/sanity";
import type { PortableTextBlock } from "@portabletext/types";
import DynamicMeta from "@components/dynamic_meta";
import TextParser from "@components/text_parser";
import styles from "@styles/cv.module.scss";

const query = `*[_type == "cv"][0] {
  text,
}
`;

interface Props {
  text: PortableTextBlock;
}

export const getStaticProps = async () => {
  const data = await sanity.fetch(query);

  return {
    props: {
      text: data.text,
    },
    revalidate: 30,
  };
};

const CV: NextPage<Props> = ({ text }) => {
  console.log(text);

  return (
    <>
      <DynamicMeta />

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <TextParser data={text} />
        </div>
      </div>
    </>
  );
};

export default CV;
