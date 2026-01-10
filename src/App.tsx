import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import Agence from "./routes/agence";
import Projects from "./routes/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<Agence />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
