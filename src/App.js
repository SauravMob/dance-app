import { useEffect, useState } from 'react';
import Navbar from './components/views/navbar'
import Home from './components/views/home';
import { Row } from 'react-bootstrap';
import VideoCard from './components/views/home/videoCard';
import universe from './components/assets/video/universe.mp4'
import sunset from './components/assets/video/sunset.mp4'

const App = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [scroll, setScroll] = useState(0)
  const [device, setDevice] = useState('LAPTOP')
  const [theme, setTheme] = useState('dark')

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY + scroll });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice("MOBILE")
      } else {
        setDevice("LAPTOP")
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleTheme = (e) => {
    if (e.target.checked) setTheme('dark')
    else setTheme('light')
  }

  return (
    <div className={`App-${theme}`} onMouseMove={handleMouseMove}>
      {device === 'LAPTOP' && <div className="majorFollower" style={{ left: position.x, top: position.y }}></div>}
      <Row className={`navbar-${theme}`}>
        <Navbar device={device} theme={theme} handleTheme={handleTheme} />
      </Row>
      {device === 'LAPTOP' && <Home theme={theme} />}
      {theme === 'dark' ? <VideoCard src={universe} /> : <VideoCard src={sunset} />}
    </div>
  )
}

export default App;