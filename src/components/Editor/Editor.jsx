import { useState } from 'react';
import GroupStorage from '../../storages/GroupStorage.js';
import ContactListStorage from '../../storages/ContactListStorage.js';
import InputEl from './InputItem/InputEl.jsx';
import SelectEl from './InputItem/SelectEl.jsx';
import styles from './Editor.module.css';

const validationMap = {
  name: {
    regexp: /^[가-힣]{2,}[0-9a-zA-Z ]*$/,
    errMsg: '이름은 한글로 두 글자 이상 입력해주세요.',
  },
  phone: {
    regexp: /^010-\d{4}-\d{4}$/,
    errMsg: '전화번호는 010-0000-0000 형식으로 입력해주세요.',
  },
};

const initialValue = {
  name: '',
  phone: '',
  group: GroupStorage.getFirstValue() || '',
  record: '',
};

const Editor = ({
  groups,
  openGroupModal,
  onSave,
  defaultValue,
  isNew,
  handleToast,
}) => {
  const [formData, setFormData] = useState(defaultValue || initialValue);

  const isValid = (text, target) => {
    if (!text) return true;
    return validationMap[target].regexp.test(text);
  };
  const reset = () => {
    setFormData(initialValue);
  };
  const handleChange = ({ target }) => {
    setFormData((prev) => ({ ...prev, [target.id]: target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !isValid(formData.name, 'name') ||
      !isValid(formData.phone, 'phone')
    ) {
      handleToast('error', '입력값을 확인해주세요!!');
      return;
    }
    if (!formData.group && !GroupStorage.getFirstValue()) {
      handleToast('error', '그룹을 추가해주세요!!');
      return;
    }
    if (
      ContactListStorage.getByName(formData.name) &&
      !(!isNew && formData.name === defaultValue.name)
    ) {
      handleToast('error', '동일한 이름으로 등록된 연락처가 있습니다.');
      return;
    }
    onSave(formData);
    reset();
    isNew && document.getElementById('name').focus();
  };
  return (
    <form className={styles.editor} onSubmit={handleSubmit}>
      <InputEl
        id="name"
        title="이름"
        message={
          !isValid(formData.name, 'name') && validationMap['name'].errMsg
        }
        value={formData.name}
        onChange={handleChange}
      />
      <InputEl
        id="phone"
        title="전화번호"
        message={
          !isValid(formData.phone, 'phone') && validationMap['phone'].errMsg
        }
        value={formData.phone}
        onChange={handleChange}
      />
      <SelectEl
        id="group"
        title="그룹"
        options={groups}
        openGroupModal={openGroupModal}
        value={formData.group}
        onChange={handleChange}
      />
      <InputEl
        id="record"
        title="간단한 기록"
        value={formData.record}
        onChange={handleChange}
      />
      <button className="btn primary" type="submit">
        저장
      </button>
    </form>
  );
};

export default Editor;
