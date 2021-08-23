import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { client } from "libs/cmsClient";

import { fetchFromCMS, Post } from "types/types";

import styles from '../../styles/content.module.scss';

type Props = {
  blog: Post;
};

const Blog: React.FC<Props> = ({ blog }) => {
  return (
    <div className={styles["p-content"]}>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <h1 className={styles["p-content__title"]}>{blog.title}</h1>
      <div
      className={styles["p-content__body"]}
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      ></div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: fetchFromCMS = await client.get({
    endpoint: "blog",
  });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id as string; //デフォルトではstring | string[]
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default Blog;
