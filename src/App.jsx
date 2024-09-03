function App() {
  return (
    <>
      <main>
        <h1>연락처 리스트</h1>
        <div className="contents">
          <div className="inputCon">
            <div className="inputItem">
              <label>이름</label>
              <input placeholder="이름" />
              <p className="message">이름은 한글만 가능합니다.</p>
            </div>
            <div className="inputItem">
              <label>전화번호</label>
              <input placeholder="전화번호" />
              <p className="message"></p>
            </div>
            <div className="inputItem">
              <label>그룹</label>
              <select>
                <option>가족</option>
              </select>
              <button>조직 추가</button>
              <p className="message"></p>
            </div>
            <div className="inputItem">
              <label>간단한 기록</label>
              <input placeholder="간단한 기록" />
              <p className="message"></p>
            </div>
            <button className="btn primary">저장</button>
          </div>
          <div className="listCon">
            <div className="search">
              <input placeholder="검색어를 입력 후 엔터를 누르세요" />
              <button className="btn primary">전체리스트 보기</button>
            </div>
            <ul className="list">
              <li className="item">
                <div className="info">이름 전화번호 그룹</div>
                <button>세부사항</button>
                <button>삭제</button>
              </li>
              <li className="item">
                <div className="info">이름 전화번호 그룹</div>
                <button>세부사항</button>
                <button>삭제</button>
              </li>
            </ul>
          </div>
        </div>
      </main>
      {/*<div className="modal">*/}
      {/*  <section className="modalBody">*/}
      {/*    <h2>그룹 관리</h2>*/}
      {/*    <div className="groupModalCon">*/}
      {/*      <ul className="groups">*/}
      {/*        <li className="groupItem">*/}
      {/*          <p>그룹명1</p>*/}
      {/*          <button>X</button>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*      <div className="groupInput">*/}
      {/*        <input placeholder="새 그룹 이름" />*/}
      {/*        <button>추가</button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <button className="btn close">닫기</button>*/}
      {/*  </section>*/}
      {/*</div>*/}
      {/*<div className="modal">*/}
      {/*  <section className="modalBody">*/}
      {/*    <h2>연락처 상세 정보</h2>*/}
      {/*    <div className="detailModalCon">*/}
      {/*      <p>*/}
      {/*        <span>이름:</span> 이름*/}
      {/*      </p>*/}
      {/*      <p>*/}
      {/*        <span>전화번호:</span> 전화번호*/}
      {/*      </p>*/}
      {/*      <p>*/}
      {/*        <span>그룹:</span> 그룹*/}
      {/*      </p>*/}
      {/*      <p>*/}
      {/*        <span>메모:</span> 메모*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <button className="btn close">닫기</button>*/}
      {/*  </section>*/}
      {/*</div>*/}
    </>
  );
}

export default App;
