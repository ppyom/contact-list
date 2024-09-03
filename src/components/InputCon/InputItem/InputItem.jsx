import styles from './InputItem.module.css';

const InputItem = ({ id, title, message, children }) => {
  return (
    <div className={styles.inputItem}>
      <label htmlFor={id}>{title}</label>
      {children}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default InputItem;
