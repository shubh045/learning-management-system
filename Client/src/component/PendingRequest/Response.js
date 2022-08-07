const Response = (props) => {
  return (
    <button className={props.className}>
      <b>{props.response}</b>
    </button>
  );
};

export default Response;
