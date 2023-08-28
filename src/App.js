import { useEffect, useRef, useState } from 'react';
import Navbar from './components/views/navbar'
import Home from './components/views/home';
import { useTrail, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import VideoCard from './components/views/home/videoCard';
import universe from './components/assets/video/universe.mp4'
import sunset from './components/assets/video/sunset.mp4'

const App = () => {

  const [ref, { left, top }] = useMeasure()
  const parallaxRef = useRef()

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
    <Parallax pages={3} ref={parallaxRef} className={`App-${theme}`} onMouseMove={handleMouseMove}>
      {trail.map((props, index) => (
        <animated.div className='majorFollower' key={index} style={{ transform: props.xy.to(trans) }} />
      ))}
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 2 }}  speed={0.1}>
        <Navbar device={device} theme={theme} handleTheme={handleTheme} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} onClick={() => parallaxRef.current.scrollTo(1)}>
        <Home theme={theme} device={device} />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1}>
        <div className='videoCard'>
          {theme === 'dark' ? <VideoCard src={universe} /> : <VideoCard src={sunset} />}
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1} onClick={() => parallaxRef.current.scrollTo(1)}>
        <Home theme={theme} device={device} />
      </ParallaxLayer>
    </Parallax>
  )
}

export default App;