import './App.css';
import './styles/Dashboard.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import GlobalDecor from './components/GlobalDecor'
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import CV from './pages/CV2';
import Project from './pages/Project'
import Privacy from './pages/Privacy'
import Error404Page from './pages/Error404Page'
import DataAnalytics from './pages/DataAnalytics'
import Services from './pages/Services';
import About from './pages/About';

function App() {
  return (
    <div>
      <Nav />
      <main className="site-main">
        <GlobalDecor />
        <div className="site-main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/project" element={<Project />} />
            <Route path="/case-studies" element={<Project />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </div>
      </main>
      <div className="watermark">SMS</div>
      <Footer />
    </div>
  )
}

export default App
