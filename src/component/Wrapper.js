
const Wrapper = ({ children }) => {

  const style = {
    display: 'flex',
    marginBottom: 5,
  };

  return <div style={style}>{children}</div>
}

export default Wrapper;