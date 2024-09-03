import { useState } from 'react';
import GroupStorage from '../../../storages/GroupStorage.js';
import CommonModal from '../CommonModal/CommonModal.jsx';
import styles from './GroupModal.module.css';

const GroupModal = ({ groups, setGroups, onClose }) => {
  const [inputText, setInputText] = useState('');

  const createGroup = () => {
    const resultText = inputText.trim();
    if (!resultText) {
      return;
    }
    const id = GroupStorage.create(resultText);
    setGroups((prev) => [...prev, { id, value: resultText }]);
    setInputText('');
  };
  const removeGroup = (id) => {
    setGroups((prev) => prev.filter((item) => item.id !== id));
    GroupStorage.remove(id);
  };

  return (
    <CommonModal title="그룹 관리" onClose={onClose}>
      <div className={styles.groupModalCon}>
        <ul className={styles.groups}>
          {groups.map((group) => (
            <li key={group.id} className={styles.groupItem}>
              <p>{group.value}</p>
              <button onClick={() => removeGroup(group.id)}>X</button>
            </li>
          ))}
        </ul>
        <div className={styles.groupInput}>
          <input
            placeholder="새 그룹 이름"
            value={inputText}
            onChange={({ target }) => setInputText(target.value)}
          />
          <button onClick={createGroup}>추가</button>
        </div>
      </div>
    </CommonModal>
  );
};

export default GroupModal;
