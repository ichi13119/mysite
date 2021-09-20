import { useContact } from 'hooks/useContact';

export const Contact: React.FC = () => {
  const { setName, setMessage, send } = useContact();

  return (
    <div className={""}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <textarea onChange={(e) => setMessage(e.target.value)} />
      <button type="button" onClick={send}>Send</button>
    </div>
  );
}