import Link from "next/link";
import dayjs from "dayjs";

import { Post } from "types";

import styles from "../styles/components/postCard.module.scss";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <li className={styles["c-postCard"]}>
        <a>
          <img />
          <div className={styles["c-postCard__content"]}>
            <div className={styles["c-postCard__content-title"]}>
              {post.title}
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}
            ></div>
            <div className={styles["c-postCard__content-date"]}>
              <span>{dayjs(post.createdAt).format("YYYY.MM.DD")}</span>
            </div>
          </div>
        </a>
      </li>
    </Link>
  );
};

export default PostCard;
