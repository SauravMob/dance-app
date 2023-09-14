import { useEffect, useRef, useState } from 'react'
import { useTrail, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import './App.css'
import Navbar from './components/navbar/index'
import Home from './components/home'
import VideoCard from './components/home/videoCard'
import universe from './components/assets/video/universe.mp4'
import sunset from './components/assets/video/sunset.mp4'
import AboutVideo from './components/home/about/videoSection'
import AboutText from './components/home/about/textSection'
import Carousel from './components/home/carousel'
import SplitSection from './components/home/splitSection'
import { Fade } from 'react-awesome-reveal'
import Footer from './components/footer'
import { Element } from 'react-scroll'

const App = () => {

  const [ref, { left, top }] = useMeasure()
  const target = useRef()

  const [theme, setTheme] = useState('dark')
  const [device, setDevice] = useState()
  const [scrollY, setScrollY] = useState(0)

  // Variables
  const trans = (x, y) => `translate3d(${x}px,${y + scrollY}px,0) translate3d(-50%,-50%,0)`

  // Hooks
  const [trail, api] = useTrail(1, i => ({
    xy: [0, 0],
    config: { mass: 10, tension: 250, friction: 30 },
  }))

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice("MOBILE")
      } else {
        setDevice("LAPTOP")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Arrow Functions
  const handleMouseMove = e => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }

  const handleTheme = (e) => {
    if (e.target.checked) setTheme('dark')
    else setTheme('light')
  }

  return (
    <>
      <div ref={ref} className={`App-${theme}`} onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div className='majorFollower' key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
        <Navbar device={device} theme={theme} handleTheme={handleTheme} />
        <Element name="home" className="home">
          <Fade duration={3000} triggerOnce={false}>
            <Home theme={theme} device={device} target={target} />
          </Fade>
        </Element>
        <div className='videoCard'>
          {theme === 'dark' ? <VideoCard src={universe} /> : <VideoCard src={sunset} />}
        </div>
        <Element name="about" className="about">
          {theme === 'dark' ? <AboutVideo src={universe} /> : <AboutVideo src={sunset} />}
          <Fade duration={3000} triggerOnce={false}>
            <AboutText theme={theme} device={device} />
          </Fade>
        </Element>
        <Element name="splitSection" className="splitSection">
          <Fade duration={3000} triggerOnce={false}>
            <SplitSection theme={theme} device={device} />
          </Fade>
        </Element>
        <Element name="carousels" className="carousels">
          <Fade duration={3000} triggerOnce={false}>
            <Carousel />
          </Fade>
        </Element>
        <Fade duration={3000} triggerOnce={false}>
          <Footer theme={theme} device={device} />
        </Fade>
      </div>
    </>
  )
}

export default App
