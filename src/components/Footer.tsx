import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/components/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles["c-footer"]}>
      <div className={styles["c-footer__about"]}>
        <div className={styles["c-footer__about-img"]}>
          <Image src={"/images/my_image.jpg"} width={300} height={300} />
        </div>
        <div className={styles["c-footer__about-detail"]}>
          <div className={styles["c-footer__about-detail-text"]}>
            <p>SHU ICHIHARA</p>
            <p>
              スタートアップベンチャーでReact,Redux-toolkit,TypeScriptを使ってのフロントエンド開発、PHPを使ってのバックエンド開発をしています。
              <br />
              プライベートではNext.js,Python,Flutter辺りを触ってみたりしています。
            </p>
          </div>
          <div className={styles["c-footer__about-links"]}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faTwitterSquare} />
              </li>
              <li>
                <FontAwesomeIcon icon={faGithubSquare} />
              </li>
            </ul>
            <Link href="/about">
              <a>
                <span>プロフィール詳細 &#x27F6;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["c-footer__copy"]}>© 2021 SHU ICHIHARA</div>
    </footer>
  );
};

export default Footer;
