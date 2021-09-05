import Head from "next/head";
import { GetStaticProps } from "next";

import { client } from "../libs/cmsClient";

import { fetchFromCMS, Post } from "types/types";

import PostCard from "components/postCard";

import styles from "../styles/blogs.module.scss";
import Link from "next/link";
// import styles from "../styles/home.module.scss";

type Props = {
  posts: Post[];
};

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles["p-blogs"]}>
        <h1 className={styles["p-blogs__title"]}>New Blogs</h1>
        <ul className={styles["p-blogs__list"]}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
        <div className={styles["p-blogs__link"]}>
          <Link href="/blogs/1">
            <a>ブログ一覧 &#x27F6;</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res: fetchFromCMS = await client.get({
    endpoint: "blog",
    queries: {
      orders: "-createdAt",
      limit: 9,
    },
  });

  return {
    props: {
      posts: res.contents,
    },
  };
};
