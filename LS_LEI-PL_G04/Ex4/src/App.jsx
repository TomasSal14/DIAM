import Header from './components/Header'
import Navbar from './components/Navbar'
import Slideshow from './components/Slideshow'
import Countdown from './components/Countdown'
import About from './components/About'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Slideshow />
      <Countdown />
      <div className="content-wrapper">
        <About />
        <Timeline />
      </div>
      <Footer />
    </>
  )
}

export default App