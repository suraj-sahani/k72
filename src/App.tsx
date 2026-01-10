import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import Agents from "./routes/agents";
import Projects from "./routes/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
