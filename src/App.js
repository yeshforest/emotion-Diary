import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
//COMPONENTS
import MyButton from "./components/MyButton";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div></div>
        <h2>App.js</h2>

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        />
        <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/diary/:id" element={<Diary />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
