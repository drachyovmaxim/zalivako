import type { NextPage } from "next";
import { format, parse } from "date-fns";

import sanity from "@lib/sanity";
import Year from "@components/year";
import styles from "@styles/home.module.scss";

const query = `*[_type == "work"] | order(year desc) {
  ...
}
`;

interface Props {
  data: any;
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
  // console.log(data);

  return (
    <div className={styles.container}>
      <div>
        {data.map((year: any, index: number) => {
          return <Year key={index} title={year[0]} works={year[1]} />;
        })}
      </div>
    </div>
  );
};

export default Home;
