import { GetStaticPaths, GetStaticProps } from "next";

import { client } from "libs/cmsClient";
import { fetchFromCMS, Post } from "types";

type Props = {
  blog: Post;
};

const Blog: React.FC<Props> = ({ blog }) => {
  return <div>{blog.title}</div>;
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
