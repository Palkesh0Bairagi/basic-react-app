
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Hero from './pages/Hero'
import Navbar from './pages/Navbar'
import Services from './pages/Services'


function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
