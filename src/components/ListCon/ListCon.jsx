import { useState } from 'react';
import ContactListStorage from '../../storages/ContactListStorage.js';
import Search from './Search/Search.jsx';
import ListItem from './ListItem/ListItem.jsx';
import styles from './ListCon.module.css';

const ListCon = ({ contactList, openDetailModal, setContactList }) => {
  const [filter, setFilter] = useState('');
  const removeContact = (id) => {
    setContactList((prev) => prev.filter((item) => item.id !== id));
    ContactListStorage.remove(id);
  };
  return (
    <div className={styles.listCon}>
      <Search setFilter={setFilter} />
      <ul className={styles.list}>
        {contactList
          .filter(
            (item) =>
              item.name.includes(filter) ||
              item.phone.includes(filter) ||
              item.group.includes(filter),
          )
          .map((item) => (
            <ListItem
              key={`${item.id}_${item.name}_${item.group}`}
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
