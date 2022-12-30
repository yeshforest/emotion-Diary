const MyButton = ({ text, type, onClick }) => {
  //MuButton MyButton_positive
  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  //default props
  type: "default",
};

export default MyButton;
