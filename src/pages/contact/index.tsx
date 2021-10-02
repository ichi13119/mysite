import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalWrapper from "components/ModalWrapper";

import { FORM_STATE } from "types/types";

import styles from "../../styles/Contact.module.scss";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";

type FormData = {
  name: string;
  email: string;
  body: string;
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FORM_STATE>(FORM_STATE.SUCCESS);

  const schema = yup
    .object({
      name: yup.string().required("必須項目です"),
      email: yup
        .string()
        .email("メールアドレスの形式が正しくありません")
        .required("必須項目です"),
      body: yup.string().required("必須項目です"),
    })
    .required();

  const inputLabel = (label: string) => {
    return (
      <div className={styles["c-contact__form-input__label"]}>
        <label>{label}</label>
        <span>必須</span>
      </div>
    );
  };

  const modalMessage = () => {
    switch (formState) {
      case FORM_STATE.PROCESSING:
        return (
          <div
            className={`${styles["c-contact__modal-message"]} ${styles["processing"]}`}
          >
            <div></div>
            <p>送信中...</p>
          </div>
        );
      case FORM_STATE.SUCCESS:
        return (
          <>
            <div
              className={`${styles["c-contact__modal-message"]} ${styles["success"]}`}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              <p>お問い合わせを送信しました</p>
            </div>
            <button onClick={handleModalClose}>閉じる</button>
          </>
        );
      case FORM_STATE.FAILED:
        return (
          <>
            <div
              className={`${styles["c-contact__modal-message"]} ${styles["failed"]}`}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
              <p>送信に失敗しました</p>
            </div>
            <button onClick={handleModalClose}>閉じる</button>
          </>
        );
    }
  };

  const handleModalClose = () => {
    setFormState(FORM_STATE.PENDING);
  };

  const onSubmit = async (contact: FormData): Promise<void> => {
    setFormState(FORM_STATE.PROCESSING);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(contact),
      }).then((res) => {
        if (!res.ok) {
          setFormState(FORM_STATE.FAILED);
          throw Error(`${res.status} ${res.statusText}`);
        }
      });
      setFormState(FORM_STATE.SUCCESS);
    } catch (err) {
      setFormState(FORM_STATE.FAILED);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles["c-contact"]}>
        <h1 className={styles["c-contact__title"]}>Contact</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["c-contact__form"]}
        >
          <div className={styles["c-contact__form-input"]}>
            {inputLabel("名前")}
            <input name="name" {...register("name")} />
            <p>{errors.name?.message}</p>
          </div>
          <div className={styles["c-contact__form-input"]}>
            {inputLabel("メールアドレス")}
            <input name="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div className={styles["c-contact__form-input"]}>
            {inputLabel("問い合わせ内容")}
            <textarea name="body" {...register("body")} rows={10} />
            <p>{errors.body?.message}</p>
          </div>
          <div className={styles["c-contact__form-button"]}>
            <button type="submit">送信</button>
          </div>
        </form>
        {formState !== FORM_STATE.PENDING && (
          <ModalWrapper
            handleClose={
              formState === FORM_STATE.SUCCESS ||
              formState === FORM_STATE.FAILED
                ? handleModalClose
                : undefined
            }
          >
            <div className={styles["c-contact__modal"]}>{modalMessage()}</div>
          </ModalWrapper>
        )}
      </div>
    </>
  );
};

export default Contact;
