import { useEffect, useState } from 'react';
import Navbar from './components/views/navbar/index'
import Home from './components/views/parallax';

const App = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [scroll, setScroll] = useState(0)
  const [device, setDevice] = useState('LAPTOP')
  const [theme, setTheme] = useState('light')

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
      <Navbar device={device} theme={theme} handleTheme={handleTheme} />
      {device === 'LAPTOP' && <Home theme={theme} />}
    </div>
  )
}

export default App;