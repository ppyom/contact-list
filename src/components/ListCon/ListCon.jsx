import styles from './ListCon.module.css';
import Search from './Search/Search.jsx';
import ListItem from './ListItem/ListItem.jsx';

const ListCon = () => {
  return (
    <div className={styles.listCon}>
      <Search />
      <ul className={styles.list}>
        <ListItem id={'1'} name={'이름'} phone={'전화번호'} group={'그룹'} />
        <ListItem id={'1'} name={'이름'} phone={'전화번호'} group={'그룹'} />
      </ul>
    </div>
  );
};

export default ListCon;
