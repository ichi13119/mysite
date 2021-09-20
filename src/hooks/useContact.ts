import { useState } from "react";

export const useContact = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const send = async () => {
    await fetch("/api/mail", {
      method: "POST",
      body: `
名前
${name}

お問い合わせ内容
${message}
`,
    });
  };

  return {
    setName,
    setMessage,
    send,
  };
};
