import Link from "next/link";
import dayjs from "dayjs";

import { Post } from "types";

import styles from "../styles/components/newPost.module.scss";

type Props = {
  post: Post;
};

const NewPosts: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <li className={styles["c-newPost"]}>
        <a>
          <img />
          <div className={styles["c-newPost__content"]}>
            <div className={styles["c-newPost__content-title"]}>
              {post.title}
            </div>
            <p>{post.body}</p>
            <div className={styles["c-newPost__content-date"]}>
              <span>
                作成日&nbsp;
                {dayjs(post.createdAt).format("YYYY.MM.DD")}
              </span>
              {post.updatedAt !== post.createdAt ? (
                <span>
                  更新日&nbsp;
                  {dayjs(post.updatedAt).format("YYYY.MM.DD")}
                </span>
              ) : null}
            </div>
          </div>
        </a>
      </li>
    </Link>
  );
};

export default NewPosts;
