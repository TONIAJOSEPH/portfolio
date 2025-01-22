import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Project from './components/Projects/Project'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>   
    <Navbar/>
    <About/>
    <Skills/>
    <Experience/>
    <Project/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
