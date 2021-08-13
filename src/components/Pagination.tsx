import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/components/Pagination.module.scss";

type Props = {
  totalCount: number;
  limit: number;
};

const Pagination: React.FC<Props> = (props) => {
  const { totalCount, limit } = props;
  const router = useRouter();
  const offset = +router.query.offset;

  const handleChangePage = useCallback(
    (_: React.ChangeEvent<unknown>, page: number) => {
      void router.push(`/page/${page}`);
    },
    [router]
  );

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const handlePrevPage = useCallback(() => {
    void router.push(`/blogs/${offset - 1}`);
  }, [offset]);

  const handleNextPage = useCallback(() => {
    void router.push(`/blogs/${offset + 1}`);
  }, [offset]);

  return (
    <ul className={styles["c-pegination"]}>
      <li
        className={
          offset !== 1 ? styles["c-pegination__list"] : styles["unvisible"]
        }
        onClick={() => handlePrevPage()}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </li>
      {range(1, Math.ceil(totalCount / limit)).map((number, index) => (
        <li
          key={index}
          className={
            index + 1 === offset
              ? styles["c-pegination__list-current"]
              : styles["c-pegination__list"]
          }
        >
          <Link href={`/blogs/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
      <li
        className={
          offset !== Math.ceil(totalCount / limit)
            ? styles["c-pegination__list"]
            : styles["unvisible"]
        }
        onClick={() => handleNextPage()}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </li>
    </ul>
  );
};

export default Pagination;
