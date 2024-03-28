
const Footer = () => {

  const div = {
    width: '100%',
    height: 200,
    backgroundColor: '#f1f3f5',
    display: 'flex',
    alignItems: 'center',
  };

  const wrap = {
    display: 'flex',
    margin: '0 auto',
    width: '80%',
  };

  const contact = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  };

  const icon = {
    width: 50,
    height: 50,
    border: '1px solid black'
  };

  const p = {
    flex: 1,
  };

  return (
    <div style={div}>
      <div style={wrap}>
        <p style={p}>
          (주)메리투어<br />
          Merry Tour Co., Ltd<br />
          대표자: 신 혜리<br />
          위치: 인천광역시 부평구<br />
          사업자번호: 000000000000
        </p>

        <div style={contact}>
          <div style={icon}></div>
          <div style={icon}></div>
          <div style={icon}></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;