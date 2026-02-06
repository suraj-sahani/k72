import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Agence from './routes/agence'
import Home from './routes/home'
import Projects from './routes/projects'
import PageTransition from './components/page-transition'
import Contact from './routes/contact'
import Blogue from './routes/blogue'

function App() {
  return (
    <>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/agence" element={<Agence />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogue" element={<Blogue />} />
          </Route>
        </Routes>
      </PageTransition>
    </>
  )
}

export default App
