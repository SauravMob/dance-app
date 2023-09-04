import { useEffect, useRef, useState } from 'react'
import Navbar from './components/views/navbar'
import Home from './components/views/home'
import { useTrail, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import VideoCard from './components/views/home/videoCard'
import universe from './components/assets/video/universe.mp4'
import sunset from './components/assets/video/sunset.mp4'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AboutVideo from './components/views/home/about/videoSection'
import AboutText from './components/views/home/about/textSection'
import Carousel from './components/views/home/caraousal'

const App = () => {

  // Refs
  const parallaxRef = useRef()
  const [ref, { left, top }] = useMeasure()

  // States
  const [theme, setTheme] = useState('dark')
  const [device, setDevice] = useState('LAPTOP')
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeLink, setActiveLink] = useState('')
  const [position, setPosition] = useState(0)

  // Variables
  const trans = (x, y) => `translate3d(${x}px,${y + scrollPosition}px,0) translate3d(-50%,-50%,0)`

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

  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

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

  const onActiveChange = (tab) => {
    setActiveLink(tab)
    if (tab === '1') setPosition(-222)
    else if (tab === '2') setPosition(-75)
    else if (tab === '3') setPosition(75)
    else if (tab === '4') setPosition(222)
  }

  const onTabChange = (tab) => {
    setActiveLink(tab)
    if (tab === '1') {
      setPosition(-222)
      parallaxRef.current.scrollTo(1)
    }
    else if (tab === '2') {
      setPosition(-75)
      parallaxRef.current.scrollTo(2)
    }
    else if (tab === '3') {
      setPosition(75)
      parallaxRef.current.scrollTo(3)
    }
    else if (tab === '4') {
      setPosition(222)
      parallaxRef.current.scrollTo(4)
    }
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove}>
      <Parallax ref={parallaxRef} pages={6} className={`App-${theme}`}>
        {/* <ParallaxLayer speed={0.5} sticky={{ start: 0, end: 5 }} style={{ height: '0px', zIndex: 0 }}>
          {trail.map((props, index) => (
            <animated.div className='majorFollower' key={index} style={{ transform: props.xy.to(trans) }} />
          ))}
        </ParallaxLayer> */}
        <ParallaxLayer speed={0.2} sticky={{ start: 0, end: 5 }} style={{ height: '0px', top: '40px', zIndex: 0 }}>
          <Navbar device={device} theme={theme} handleTheme={handleTheme} onActiveChange={onActiveChange} onTabChange={onTabChange} activeLink={activeLink} position={position} />
        </ParallaxLayer>
        <ParallaxLayer speed={-0.1} offset={0}>
          <Home theme={theme} device={device} />
        </ParallaxLayer>
        <ParallaxLayer style={{ height: '100vh', zIndex: -1 }} speed={1} offset={1}>
          <div className='videoCard'>
            {theme === 'dark' ? <VideoCard src={universe} /> : <VideoCard src={sunset} />}
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={2} sticky={{ start: 2, end: 3 }} style={{ height: '100vh', zIndex: -1 }} onMouseEnter={() => onActiveChange('1')} onMouseLeave={() => onActiveChange('')}>
          <div className='about-videoCard'>
            {theme === 'dark' ? <AboutVideo src={universe} /> : <AboutVideo src={sunset} />}
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={2.5}>
          <AboutText theme={theme} device={device} />
        </ParallaxLayer>
        <ParallaxLayer style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} speed={0.8} offset={4}>
          <Carousel theme={theme} device={device} />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={5} onClick={() => parallaxRef.current.scrollTo(2)} onMouseEnter={() => onActiveChange('2')}>
          <Home theme={theme} device={device} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App