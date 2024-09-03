import styles from './CommonModal.module.css';
const CommonModal = ({ title, children }) => {
  return (
    <div className={styles.modal}>
      <section className={styles.modalBody}>
        <h2>{title}</h2>
        {children}
        <button className={`btn ${styles.close}`}>닫기</button>
      </section>
    </div>
  );
};
export default CommonModal;
