import styles from './CommonModal.module.css';
const CommonModal = ({ title, onClose, children }) => {
  const handleModalBgClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };
  return (
    <div className={styles.modal} onClick={handleModalBgClose}>
      <section className={styles.modalBody}>
        <h2>{title}</h2>
        {children}
        <button className={`btn ${styles.close}`} onClick={onClose}>
          닫기
        </button>
      </section>
    </div>
  );
};
export default CommonModal;
