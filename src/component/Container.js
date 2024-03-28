
const Container = ({ children }) => {

  const style = {
    width: '80%',
    margin: '0 auto',
    marginBottom: 150,
  };

  return <div style={style}>{children}</div>
}

export default Container;