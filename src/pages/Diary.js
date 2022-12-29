import { useParams } from "react-router-dom";
const Diary = () => {
  const { id } = useParams(); //전달받아 들어오는 Path var들을 객체로 갖다준다.
  console.log(id);
  return (
    <div>
      <h1>Diary</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;
