import InputItem from './InputItem.jsx';

const InputEl = ({ id, title, message, value, onChange }) => {
  return (
    <InputItem id={id} title={title} message={message}>
      <input id={id} placeholder={title} value={value} onChange={onChange} />
    </InputItem>
  );
};

export default InputEl;
