const Response = (props) => {
  return (
    <button className={props.className} onClick={props.statusHandler} key={props.key}>
      <b>{props.response}</b>
    </button>
  );
};

export default Response;
