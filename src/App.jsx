import { useState } from 'react';
import InputCon from './components/InputCon/InputCon.jsx';
import ListCon from './components/ListCon/ListCon.jsx';
import GroupModal from './components/modals/GroupModal/GroupModal.jsx';
import DetailModal from './components/modals/DetailModal/DetailModal.jsx';
import GroupStorage from './storages/GroupStorage.js';
import ContactListStorage from './storages/ContactListStorage.js';

function App() {
  const [groups, setGroups] = useState(GroupStorage.getList());
  const [contactList, setContactList] = useState(ContactListStorage.getList());
  const [openGroupModal, setOpenGroupModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);

  return (
    <>
      <main>
        <h1>연락처 리스트</h1>
        <div className="contents">
          <InputCon
            groups={groups}
            openGroupModal={() => setOpenGroupModal(true)}
            setContactList={setContactList}
          />
          <ListCon />
        </div>
      </main>
      {openGroupModal && (
        <GroupModal
          groups={groups}
          setGroups={setGroups}
          onClose={() => setOpenGroupModal(false)}
        />
      )}
      {openDetailModal && (
        <DetailModal onClose={() => setOpenDetailModal(false)} />
      )}
    </>
  );
}

export default App;
