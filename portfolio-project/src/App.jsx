import './App.css'
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import fullbg from './assets/fullbg.png'

function App() {


  return (
    <div className='font-display relative bg-center bg-cover'
      style={{ backgroundImage: `url(${fullbg})` }}
    >
      <Header />
      <Introduction />
      <Experiences />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App