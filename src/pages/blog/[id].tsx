import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { client } from "libs/cmsClient";

import { fetchFromCMS, Post } from "types/types";

type Props = {
  blog: Post;
};

const Blog: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <h1 style={{ wordBreak: "break-all" }}>{blog.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      ></div>
    </>
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
