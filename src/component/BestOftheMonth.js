
const BestOftheMonth = () => {

  const div = {
    // backgroundColor: 'orange',
    width: '40%',
    height: 300,
    marginRight: 5,
  };

  const best = {
    // backgroundColor: 'skyblue',
    width: '100%',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '30px',
  };

  return (
    <div style={div}>
      <h3>｜이달의 베스트</h3>
      <div style={best}>
        <p>해외여행에서 플랜 하나 가져오기</p>
      </div>
    </div>
  );
}

export default BestOftheMonth;