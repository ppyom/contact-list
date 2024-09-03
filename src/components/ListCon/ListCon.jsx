import styles from './ListCon.module.css';
import Search from './Search/Search.jsx';
import ListItem from './ListItem/ListItem.jsx';
import ContactListStorage from '../../storages/ContactListStorage.js';

const ListCon = ({ contactList, openDetailModal, setContactList }) => {
  const removeContact = (id) => {
    setContactList((prev) => prev.filter((item) => item.id !== id));
    ContactListStorage.remove(id);
  };
  return (
    <div className={styles.listCon}>
      <Search />
      <ul className={styles.list}>
        {contactList.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            phone={item.phone}
            group={item.group}
            openDetailModal={openDetailModal}
            removeContact={removeContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListCon;
