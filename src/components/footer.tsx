import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/components/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles["c-footer"]}>
      <ul className={styles["c-footer__links"]}>
        <li>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithubSquare} />
        </li>
      </ul>
      <div className={styles["c-footer__copy"]}>コピーライト</div>
    </footer>
  );
};

export default Footer;
