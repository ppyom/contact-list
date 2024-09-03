import CommonModal from '../CommonModal/CommonModal.jsx';
import styles from './GroupModal.module.css';

const GroupModal = ({ onClose }) => {
  return (
    <CommonModal title="그룹 관리" onClose={onClose}>
      <div className={styles.groupModalCon}>
        <ul className={styles.groups}>
          <li className={styles.groupItem}>
            <p>그룹명1</p>
            <button>X</button>
          </li>
        </ul>
        <div className={styles.groupInput}>
          <input placeholder="새 그룹 이름" />
          <button>추가</button>
        </div>
      </div>
    </CommonModal>
  );
};

export default GroupModal;
