import Link from "next/link";
import Image from "next/image";
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
          <div className={styles["c-postCard__img"]}>
            {/* <Image src={"/images/my_image.jpg"} width={300} height={220} /> */}
            {/* <img/> */}
            <img src={"/images/my_image.jpg"} />
          </div>
          <div className={styles["c-postCard__content"]}>
            <h2 className={styles["c-postCard__content-title"]}>
              {post.title}
            </h2>
            <div
            className={styles["c-postCard__content-body"]}
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
