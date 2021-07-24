import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import { client } from "../libs/cmsClient";

import { fetchFromCMS, Post } from "types";

import PostCard from "components/postCard";

import styles from "../styles/blogs.module.scss";
// import styles from "../styles/home.module.scss";

type Props = {
  posts: Post[];
};

const Home: React.FC<Props> = ({ posts }) => {
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
      {/* <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles["p-post"]}>
        <div className={styles["p-post__title"]}>New Posts</div>
        <ul className={styles["p-post__newPosts"]}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
        <div className={styles["p-post__link"]}>
          <Link href="/blog">
            <a>Others</a>
          </Link>
        </div>
      </div>
      <div className={styles["p-about"]}>
        <div className={styles["p-about__img"]}></div>
        <div className={styles["p-about__content"]}>
          <div className={styles["p-about__content-title"]}>About</div>
          <div className={styles["p-about__content-text"]}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </div>
          <div className={styles["p-about__content-link"]}>
            <Link href="/about">
              <a>View More</a>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const res: fetchFromCMS = await client.get({
//     endpoint: "blog",
//     queries: {
//       limit: 3,
//       orders: "-createdAt",
//     },
//   });

//   const posts: Post[] = res.contents;

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const res: fetchFromCMS = await client.get({
    endpoint: "blog",
    queries: {
      orders: "-updatedAt,-createdAt",
    },
  });

  const posts: Post[] = res.contents;

  return {
    props: {
      posts,
    },
  };
};