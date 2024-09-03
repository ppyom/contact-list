import styles from './InputCon.module.css';
import InputEl from './InputItem/InputEl.jsx';
import SelectEl from './InputItem/SelectEl.jsx';

const InputCon = () => {
  return (
    <div className={styles.inputCon}>
      <InputEl id="name" title="이름" message="" />
      <InputEl id="phone" title="전화번호" message="" />
      <SelectEl
        id="group"
        title="그룹"
        options={[
          { id: '1', value: '가족' },
          { id: '2', value: '친구' },
          { id: '3', value: '직장' },
          { id: '4', value: '스터디' },
        ]}
      />
      <InputEl id="record" title="간단한 기록" />
      <button className="btn primary">저장</button>
    </div>
  );
};

export default InputCon;
