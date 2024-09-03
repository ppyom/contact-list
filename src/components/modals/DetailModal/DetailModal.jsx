import { useState } from 'react';
import ContactListStorage from '../../../storages/ContactListStorage.js';
import CommonModal from '../CommonModal/CommonModal.jsx';
import Editor from '../../Editor/Editor.jsx';
import Viewer from './Viewer/Viewer.jsx';
import styles from './DetailModal.module.css';

const DetailModal = ({
  selected,
  onClose,
  groups,
  openGroupModal,
  setContactList,
}) => {
  const [editMode, setEditMode] = useState(false);
  const selectedItem = ContactListStorage.getById(selected);

  const updateItem = (item) => {
    setContactList((prev) =>
      prev.map((_item) => (_item.id === selected ? item : _item)),
    );
    ContactListStorage.update(selected, { id: selected, ...item });
    setEditMode(false);
  };

  return (
    <CommonModal title="연락처 상세 정보" onClose={onClose}>
      <div className={styles.detailModalCon}>
        {editMode ? (
          <>
            <Editor
              groups={groups}
              openGroupModal={openGroupModal}
              onSave={updateItem}
              defaultValue={selectedItem}
            />
            <button
              className="btn secondary"
              onClick={() => setEditMode(false)}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <Viewer {...selectedItem} />
            <button className="btn secondary" onClick={() => setEditMode(true)}>
              수정
            </button>
          </>
        )}
      </div>
    </CommonModal>
  );
};
export default DetailModal;
