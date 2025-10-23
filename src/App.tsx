import './App.css';
import './styles/Dashboard.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import CV from './pages/CV2';
import Project from './pages/Project'
import Privacy from './pages/Privacy'
import Error404Page from './pages/Error404Page'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/project" element={<Project />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
