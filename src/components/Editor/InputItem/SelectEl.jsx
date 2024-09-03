import InputItem from './InputItem.jsx';

const SelectEl = ({
  id,
  title,
  options,
  openGroupModal,
  message,
  value,
  onChange,
}) => {
  return (
    <InputItem id={id} title={title} message={message}>
      <select id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <button onClick={openGroupModal}>그룹 추가</button>
    </InputItem>
  );
};

export default SelectEl;
