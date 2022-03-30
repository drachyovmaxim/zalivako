import type { NextPage } from "next";
import { format, parse } from "date-fns";

import sanity from "@lib/sanity";
// import type { Work } from "@interfaces/work";
import DynamicMeta from "@components/dynamic_meta";
import Year from "@components/year";
import styles from "@styles/home.module.scss";

const query = `*[_type == "work"] | order(year desc) {
  slug,
  year,
  title,
  text,
  preview[] {
    _type == 'empty' => {
      _type,
    },
    _type == 'video' => {
      _type,
      "videoURL": asset->url,
    },
    _type == 'image' => {
      ...,
    },
    _type == 'blockText' => {
      ...
    },
  },
  content[] {
    _type == 'empty' => {
      _type,
    },
    _type == 'video' => {
      _type,
      "videoURL": asset->url,
    },
    _type == 'image' => {
      ...,
    },
    _type == 'blockText' => {
      ...
    },
  },
}
`;

interface Props {
  data: [];
}

export const getStaticProps = async () => {
  const data = await sanity.fetch(query);

  const groupBy = (items: any[], key: string) =>
    items.reduce((result, item) => {
      const year = new Date(item[key]).getFullYear();
      return {
        ...result,
        [year]: (result[year] || []).concat([item]),
      };
    }, {});

  const sortable = Object.entries(groupBy(data, "year")).sort((a, b) => {
    // @ts-ignore
    return new Date(a.year).getFullYear() - new Date(b.year).getFullYear();
  });

  return {
    props: {
      data: sortable.reverse(),
    },
    revalidate: 30,
  };
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <DynamicMeta />

      <div className={styles.container}>
        <div>
          {data.map((year, index) => {
            return <Year key={index} title={year[0]} works={year[1]} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
