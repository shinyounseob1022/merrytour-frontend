
const Banner = () => {

  const div = {
    width: '100%',
    height: 350,
    // backgroundColor: 'green',
    marginBottom: 5,
  };

  const image = {
    width: '100%',
    height: 350,
  };

  return (
    <div style={div}>
      <img style={image} src="/image/main_image.png"></img>
    </div>
  );
}

export default Banner;