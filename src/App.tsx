import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Agence from "./routes/agence";
import Home from "./routes/home";
import Projects from "./routes/projects";

function App() {
  return (
    <>
      {/* <PageTransition> */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* </PageTransition> */}
    </>
  );
}

export default App;
