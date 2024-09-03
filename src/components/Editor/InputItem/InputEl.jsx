import InputItem from './InputItem.jsx';

const InputEl = ({ id, title, message, value, onChange, disabled }) => {
  return (
    <InputItem id={id} title={title} message={message}>
      <input
        id={id}
        placeholder={title}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </InputItem>
  );
};

export default InputEl;
