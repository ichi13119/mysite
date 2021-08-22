import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { client } from "libs/cmsClient";
import { fetchFromCMS, Post } from "types/types";
import PostCard from "components/postCard";
import Pagination from "components/Pagination";

import styles from "../../styles/blogs.module.scss";

type Props = {
  contents: Post[];
  totalCount: number;
  limit: number;
};

const DynamicPage: NextPage<Props> = ({ contents, totalCount, limit }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className={styles["p-blogs"]}>
        <h1 className={styles["p-blogs__title"]}>Blogs</h1>
        <ul className={styles["p-blogs__list"]}>
          {contents.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
      <Pagination totalCount={totalCount} limit={limit} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contents: fetchFromCMS = await client.get({
    endpoint: "blog",
    queries: {
      limit: 1,
    },
  });

  const paths = [...Array(Math.ceil(contents.totalCount / contents.limit))]
    .map((_, i) => i + 1)
    .map((offset) => `/blogs/${offset}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const offset = params?.offset ? String(params?.offset) : "0";

  const contents: fetchFromCMS = await client.get({
    endpoint: "blog",
    queries: {
      limit: 1,
      offset: Math.ceil(Number.parseInt(offset, 10) - 1),
    },
  });

  return {
    props: {
      contents: contents.contents,
      totalCount: contents.totalCount,
      limit: contents.limit,
    },
  };
};

export default DynamicPage;
