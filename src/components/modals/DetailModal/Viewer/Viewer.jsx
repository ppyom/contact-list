const Viewer = ({ name, phone, group, record }) => {
  return (
    <>
      <p>
        <span>이름:</span> {name}
      </p>
      <p>
        <span>전화번호:</span> {phone}
      </p>
      <p>
        <span>그룹:</span> {group}
      </p>
      <p>
        <span>메모:</span> {record}
      </p>
    </>
  );
};

export default Viewer;
