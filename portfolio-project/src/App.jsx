import './App.css'
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import fullbg from './assets/fullbg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div
      className='font-display relative w-full min-h-screen bg-center bg-cover'
      style={{ backgroundImage: `url(${fullbg})` }}
    >
      <Header />
      <Introduction />
      <Experiences />
      <Projects />
      <Skills />
    </div>
  )
}

export default App