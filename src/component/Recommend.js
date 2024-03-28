
const Recommend = () => {

  const div = {
    // backgroundColor: 'pink',
    width: '40%',
    height: 300,
    marginRight: 5,
  };

  const recommend = {
    // backgroundColor: 'yellow',
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
      <h3>｜추천 여행</h3>
      <div style={recommend}>
        <p>국내여행에서 플랜 하나 가져오기</p>
      </div>
    </div>
  );
}

export default Recommend;