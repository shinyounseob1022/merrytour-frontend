
const Header = () => {

  const div = {
    width: '100%',
    height: 70,
    backgroundColor: 'rgb(28, 48, 37)',
    marginBottom: 5,
  };

  const logo = {
    width: 70,
    height: 70,
  };

  const empty = {
    flex: 1,
    width: 70,
    height: 70,
    //backgroundColor: 'black',
  };

  const ul = {
    flex: 2,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    //backgroundColor: 'grey',
  };

  const li = {
    //border: '1px solid black'
    color: 'white',
  };

  const wrap = {
    width: '80%',
    display: 'flex',
    margin: '0 auto',
  };

  const a = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <div style={div}>
      <nav>
        <div style={wrap}>
          {/* <div style={logo}></div> */}
          <img style={logo} src="/image/logo_white.png"></img>
          <div style={empty}></div>
          <ul style={ul}>
            <li style={li}><a href="#" style={a}>홈</a></li>
            <li style={li}><a href="#" style={a}>소개</a></li>
            <li style={li}><a href="#" style={a}>투어</a></li>
            <li style={li}><a href="#" style={a}>예약 및 문의</a></li>
            <li style={li}><a href="#" style={a}>후기</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;