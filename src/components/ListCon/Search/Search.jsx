import { useState } from 'react';
import styles from './Search.module.css';

const Search = ({ isFiltered, setFilter }) => {
  const [searchText, setSearchText] = useState('');

  const updateFilter = (text = '') => {
    setFilter(text);
    setSearchText(text);
  };
  const handleEnterKeyUp = (event) =>
    event.key === 'Enter' && updateFilter(searchText);

  return (
    <div className={`${styles.search} ${isFiltered ? styles.active : ''}`}>
      <input
        placeholder="검색어를 입력 후 엔터를 누르세요"
        value={searchText}
        onChange={({ target }) => setSearchText(target.value)}
        onKeyUp={handleEnterKeyUp}
      />
      <button
        className="btn primary"
        onClick={() => updateFilter()}
        disabled={!isFiltered}
      >
        전체 리스트
      </button>
    </div>
  );
};

export default Search;
