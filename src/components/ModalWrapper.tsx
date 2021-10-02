import styles from "../styles/components/ModalWrapper.module.scss";

type Props = {
  handleClose?: () => void;
}

const ModalWrapper: React.FC<Props> = ({ children, handleClose }) => {
  return (
    <div className={styles["c-modalWrapper"]} onClick={handleClose}>
      <div className={styles["c-modalWrapper__modal"]}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
