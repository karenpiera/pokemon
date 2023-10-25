import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Detail from "./views/detail/detail";
import Landing from "./views/landing/landing";
import About from "./views/about/about";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
