import './App.css'
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import fullbg from './assets/fullbg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'; // added useState to track background load status
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {
  const [bgLoaded, setBgLoaded] = useState(false) // tracks whether fullbg.png has finished loading

  useEffect(() => {
    AOS.init()
  }, [])

  // preloads the background image via JS so we know exactly when it's ready,
  // instead of letting the CSS background-image render whenever it happens to arrive
  useEffect(() => {
    const img = new Image()
    img.src = fullbg
    if (img.complete) {
      // image was already cached (e.g. repeat visit) - skip the loader entirely
      setBgLoaded(true)
    } else {
      img.onload = () => setBgLoaded(true)
      img.onerror = () => setBgLoaded(true) // fail open so a broken image doesn't stall the page forever
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={
        <>
          <div
            className='fixed inset-0 bg-[#0b0904] z-[100] flex items-center justify-center transition-opacity duration-500'
            style={{
              opacity: bgLoaded ? 0 : 1,
              pointerEvents: bgLoaded ? 'none' : 'auto',
            }}
          >
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/70 rounded-full animate-spin" />
          </div>

          <div
            className='font-display relative w-full min-h-screen bg-center bg-cover'
            style={{ backgroundImage: `url(${fullbg})`, backgroundColor: '#0b0904' }}
          >
            <style>{`
              @keyframes scan { 0% { background-position: 0 0; } 100% { background-position: 0 8px; } }
              .signal-scanlines {
                  background-image: repeating-linear-gradient(
                      to bottom,
                      rgba(255,255,255,0.04) 0px,
                      rgba(255,255,255,0.04) 1px,
                      transparent 1px,
                      transparent 3px
                  );
                  animation: scan 0.5s linear infinite;
              }
              @media (prefers-reduced-motion: reduce) {
                  .signal-scanlines { animation: none !important; }
              }
            `}</style>
            <div className="signal-scanlines pointer-events-none fixed inset-0 z-40" />
            <Header />
            <Introduction />
            <Experiences />
            <Projects />
            <Skills />
          </div>
        </>
      }/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>

  )
}

export default App