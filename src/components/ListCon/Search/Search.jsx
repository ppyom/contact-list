import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.search}>
      <input placeholder="검색어를 입력 후 엔터를 누르세요" />
      <button className="btn primary">전체리스트 보기</button>
    </div>
  );
};

export default Search;
