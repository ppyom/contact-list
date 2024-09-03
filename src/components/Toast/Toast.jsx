import styles from './Toast.module.css';
import { useEffect } from 'react';

const Toast = ({ message, onClose, type = 'default', time = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, time);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${styles.toast} ${styles[type]}`} onClick={onClose}>
      {message}
    </div>
  );
};

export default Toast;
