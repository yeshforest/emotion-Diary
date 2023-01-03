import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];
const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {sortOptionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");
  return (
    <div>
      <ControlMenu value={sortType} onChange={setSortType} />
      {diaryList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
