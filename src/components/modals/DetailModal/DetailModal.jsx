import { useState } from 'react';
import ContactListStorage from '../../../storages/ContactListStorage.js';
import CommonModal from '../CommonModal/CommonModal.jsx';
import Viewer from './Viewer/Viewer.jsx';
import styles from './DetailModal.module.css';

const DetailModal = ({ selected, onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const selectedItem = ContactListStorage.getById(selected);
  return (
    <CommonModal title="연락처 상세 정보" onClose={onClose}>
      <div className={styles.detailModalCon}>
        {editMode ? (
          <></>
        ) : (
          <Viewer {...selectedItem} onEditMode={() => setEditMode(true)} />
        )}
      </div>
    </CommonModal>
  );
};
export default DetailModal;
