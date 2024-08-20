import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/Skills'
function App() {
  return (
    <>
     <Header logo="front-end developer" connect="Connect With Me"/>
     <Hero/>
     <About/>
     <Skills/>
     {/* <Project/> */}
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
