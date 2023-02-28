import React from "react";
const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick, //함수는 useState함수를 통해 전달받은 상태변화 함수가 아니라면 다시 생성된다.
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img} />
      <span>{emotion_descript}</span>
    </div>
  );
};
export default React.memo(EmotionItem);
