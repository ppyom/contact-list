import styles from './ListItem.module.css';

const ListItem = ({ id, name, phone, group }) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        {name} {phone} {group}
      </div>
      <button>세부사항</button>
      <button>삭제</button>
    </li>
  );
};

export default ListItem;
