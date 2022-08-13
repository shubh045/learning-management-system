import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DescButton = (props) => {
  return (
    <button
      onClick={props.handleClick}
      key={props.key}
      id={props.id}
      className="b3"
    >
      <FontAwesomeIcon icon={props.arrow} key={props.key} />
    </button>
  );
};

export default DescButton;
