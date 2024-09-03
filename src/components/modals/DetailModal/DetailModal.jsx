import CommonModal from '../CommonModal/CommonModal.jsx';
import styles from './DetailModal.module.css';

const DetailModal = ({ onClose }) => {
  return (
    <CommonModal title="연락처 상세 정보" onClose={onClose}>
      <div className={styles.detailModalCon}>
        <p>
          <span>이름:</span> 이름
        </p>
        <p>
          <span>전화번호:</span> 전화번호
        </p>
        <p>
          <span>그룹:</span> 그룹
        </p>
        <p>
          <span>메모:</span> 메모
        </p>
      </div>
    </CommonModal>
  );
};
export default DetailModal;
