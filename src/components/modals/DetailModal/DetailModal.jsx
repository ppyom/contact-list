import CommonModal from '../CommonModal/CommonModal.jsx';
import styles from './DetailModal.module.css';
import ContactListStorage from '../../../storages/ContactListStorage.js';

const DetailModal = ({ selected, onClose }) => {
  const { name, phone, group, record } = ContactListStorage.getById(selected);
  return (
    <CommonModal title="연락처 상세 정보" onClose={onClose}>
      <div className={styles.detailModalCon}>
        <p>
          <span>이름:</span> {name}
        </p>
        <p>
          <span>전화번호:</span> {phone}
        </p>
        <p>
          <span>그룹:</span> {group}
        </p>
        <p>
          <span>메모:</span> {record}
        </p>
      </div>
    </CommonModal>
  );
};
export default DetailModal;
