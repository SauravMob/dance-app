import { useEffect, useState } from 'react';
import Navbar from './components/views/navbar'
import Home from './components/views/home';
import { Row } from 'react-bootstrap';
import { useTrail, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';

const App = () => {

  const [ref, { left, top }] = useMeasure()

  const [device, setDevice] = useState('LAPTOP')
  const [theme, setTheme] = useState('dark')
  const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

  const [trail, api] = useTrail(1, i => ({
    xy: [0, 0],
    config: { mass: 10, tension: 250, friction: 70 },
  }))

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

  const handleMouseMove = e => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }

  const handleTheme = (e) => {
    if (e.target.checked) setTheme('dark')
    else setTheme('light')
  }

  return (
    <div ref={ref} className={`App-${theme}`} onMouseMove={handleMouseMove}>
      {trail.map((props, index) => (
        <animated.div className='majorFollower' key={index} style={{ transform: props.xy.to(trans) }} />
      ))}
      <Navbar device={device} theme={theme} handleTheme={handleTheme} />
      <Home theme={theme} device={device} />
    </div>
  )
}

export default App;