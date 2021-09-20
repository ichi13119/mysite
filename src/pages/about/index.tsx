import Head from "next/head";

import Timeline from "components/Timeline";

import styles from "../../styles/about.module.scss";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className={styles["p-about"]}>
        <h1 className={styles["p-about__title"]}>About</h1>
        <div className={styles["p-about__summary"]}>
          <h2>経歴</h2>
          <Timeline />
        </div>
        {/* <div>性格</div>
        <div>趣味趣向</div>
        <div>性格分析やら各種分析結果</div> */}
      </div>
    </>
  );
};

export default About;
