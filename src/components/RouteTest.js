import { Link } from "react-router-dom";
//안쓰는 테스트파일
const RouteTest = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/edit">EDIT</Link>
      <br />
      <Link to="/diary">DIARY</Link>
      <br />
      <Link to="/new">NEW</Link>
      <br />
    </>
  );
};
export default RouteTest;
