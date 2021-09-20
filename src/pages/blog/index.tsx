import { GetStaticProps } from "next";
import Head from "next/head";

import PostCard from "../../components/PostCard";

import { client } from "libs/cmsClient";

import { FetchFromCMS, Post } from "types/types";

import styles from "../../styles/blogs.module.scss";

type Props = {
  posts: Post[];
};

const Blogs: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className={styles["p-blogs"]}>
        <h1 className={styles["p-blogs__title"]}>Blogs</h1>
        <ul className={styles["p-blogs__list"]}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res: FetchFromCMS = await client.get({
    endpoint: "blog",
    queries: {
      orders: "-createdAt",
    },
  });

  const posts: Post[] = res.contents;

  return {
    props: {
      posts,
    },
  };
};

export default Blogs;
