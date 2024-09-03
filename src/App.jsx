import { useState } from 'react';
import InputCon from './components/InputCon/InputCon.jsx';
import ListCon from './components/ListCon/ListCon.jsx';
import GroupModal from './components/modals/GroupModal/GroupModal.jsx';
import DetailModal from './components/modals/DetailModal/DetailModal.jsx';

function App() {
  const [openGroupModal, setOpenGroupModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);

  return (
    <>
      <main>
        <h1>연락처 리스트</h1>
        <div className="contents">
          <InputCon />
          <ListCon />
        </div>
      </main>
      {openGroupModal && (
        <GroupModal onClose={() => setOpenGroupModal(false)} />
      )}
      {openDetailModal && (
        <DetailModal onClose={() => setOpenDetailModal(false)} />
      )}
    </>
  );
}

export default App;
