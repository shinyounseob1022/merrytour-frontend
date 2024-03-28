
const UserReview = () => {

  const div = {
    // backgroundColor: 'blueviolet',
    width: '20%',
    height: 300,
  };

  const review = {
    // backgroundColor: 'aquamarine',
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
      <h3>｜이용자 후기</h3>
      <div style={review}>
        <p>후기 메뉴에서 슬라이드</p>
      </div>
    </div>
  );
}

export default UserReview;