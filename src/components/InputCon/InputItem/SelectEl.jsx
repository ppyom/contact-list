import InputItem from './InputItem.jsx';

const SelectEl = ({ id, title, options, message }) => {
  return (
    <InputItem id={id} title={title} message={message}>
      <select>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <button>조직 추가</button>
    </InputItem>
  );
};

export default SelectEl;
