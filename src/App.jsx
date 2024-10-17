import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer} from './components'


function App() {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      {/*  bg-hero-pattern provides the background image that is already configured in tailwind.config.js */}
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Tech />
      <Works/>
      {/* <Feedbacks/> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
