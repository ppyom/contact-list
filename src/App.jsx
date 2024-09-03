import InputCon from './components/InputCon/InputCon.jsx';
import ListCon from './components/ListCon/ListCon.jsx';

function App() {
  return (
    <>
      <main>
        <h1>연락처 리스트</h1>
        <div className="contents">
          <InputCon />
          <ListCon />
        </div>
      </main>
    </>
  );
}

export default App;
