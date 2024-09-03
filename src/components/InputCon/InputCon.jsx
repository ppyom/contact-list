import { useState } from 'react';
import InputEl from './InputItem/InputEl.jsx';
import SelectEl from './InputItem/SelectEl.jsx';
import styles from './InputCon.module.css';
import ContactListStorage from '../../storages/ContactListStorage.js';
import GroupStorage from '../../storages/GroupStorage.js';

const validationMap = {
  name: {
    regexp: /^[가-힣]{2,}$/,
    errMsg: '이름은 한글로 두 글자 이상 입력해주세요.',
  },
  phone: {
    regexp: /^010-\d{4}-\d{4}$/,
    errMsg: '전화번호는 010-0000-0000 형식으로 입력해주세요.',
  },
};

const InputCon = ({ groups, openGroupModal, setContactList }) => {
  const [nameText, setNameText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [groupSelect, setGroupSelect] = useState(GroupStorage.getFirstValue());
  const [recordText, setRecordText] = useState('');

  const isValid = (text, target) => {
    if (!text) return true;
    return validationMap[target].regexp.test(text);
  };
  const reset = () => {
    setNameText('');
    setPhoneText('');
    setGroupSelect('');
    setRecordText('');
  };
  const handleSave = () => {
    if (
      !nameText ||
      !phoneText ||
      !isValid(nameText, 'name') ||
      !isValid(phoneText, 'phone')
    ) {
      console.error('입력값을 확인해주세요!!');
      return;
    }
    if (!groupSelect && !GroupStorage.getFirstValue()) {
      console.error('그룹을 추가해주세요!!');
      return;
    }
    const item = {
      name: nameText,
      phone: phoneText,
      group: groupSelect || GroupStorage.getFirstValue(),
      record: recordText,
    };
    const id = ContactListStorage.create(item);
    setContactList((prev) => [...prev, { id, ...item }]);
    reset();
  };

  return (
    <div className={styles.inputCon}>
      <InputEl
        id="name"
        title="이름"
        message={!isValid(nameText, 'name') && validationMap['name'].errMsg}
        value={nameText}
        onChange={({ target }) => setNameText(target.value)}
      />
      <InputEl
        id="phone"
        title="전화번호"
        message={!isValid(phoneText, 'phone') && validationMap['phone'].errMsg}
        value={phoneText}
        onChange={({ target }) => setPhoneText(target.value)}
      />
      <SelectEl
        id="group"
        title="그룹"
        options={groups}
        openGroupModal={openGroupModal}
        value={groupSelect}
        onChange={({ target }) => setGroupSelect(target.value)}
      />
      <InputEl
        id="record"
        title="간단한 기록"
        value={recordText}
        onChange={({ target }) => setRecordText(target.value)}
      />
      <button className="btn primary" onClick={handleSave}>
        저장
      </button>
    </div>
  );
};

export default InputCon;
