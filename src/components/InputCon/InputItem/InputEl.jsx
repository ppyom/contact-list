import InputItem from './InputItem.jsx';

const InputEl = ({ id, title, message }) => {
  return (
    <InputItem id={id} title={title} message={message}>
      <input id={id} placeholder={title} />
    </InputItem>
  );
};

export default InputEl;
