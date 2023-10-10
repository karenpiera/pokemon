import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Landing from "./views/landing/landing";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
