import { useEffect, useState } from 'react';
import Navbar from './components/views/navbar/index'
import Parallax from './components/views/parallax';

const App = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [scroll, setScroll] = useState(0)

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

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div className="majorFollower" style={{ left: position.x, top: position.y }}></div>
      <Navbar />
      <Parallax />
    </div>
  )
}

export default App;