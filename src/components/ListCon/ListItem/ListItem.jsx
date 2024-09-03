import styles from './ListItem.module.css';

const ListItem = ({
  id,
  name,
  phone,
  group,
  openDetailModal,
  removeContact,
}) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        {name} {phone} {group}
      </div>
      <button onClick={() => openDetailModal(id)}>세부사항</button>
      <button onClick={() => removeContact(id)}>삭제</button>
    </li>
  );
};

export default ListItem;
