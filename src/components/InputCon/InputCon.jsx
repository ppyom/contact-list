import Editor from '../Editor/Editor.jsx';
import styles from './InputCon.module.css';
import ContactListStorage from '../../storages/ContactListStorage.js';

const InputCon = ({ groups, openGroupModal, setContactList, handleToast }) => {
  const createNewItem = (item) => {
    const id = ContactListStorage.create(item);
    setContactList((prev) => [...prev, { id, ...item }]);
  };

  return (
    <div className={styles.inputCon}>
      <Editor
        groups={groups}
        openGroupModal={openGroupModal}
        onSave={createNewItem}
        isNew={true}
        handleToast={handleToast}
      />
    </div>
  );
};

export default InputCon;
