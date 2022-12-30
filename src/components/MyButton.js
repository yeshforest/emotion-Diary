const MyButton = ({ text, type, onClick }) => {
  //MuButton MyButton_positive
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
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
