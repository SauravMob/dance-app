import { useEffect, useRef, useState } from 'react';
import Navbar from './components/views/navbar'
import Home from './components/views/home';
import { useTrail, animated } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import VideoCard from './components/views/home/videoCard';
import universe from './components/assets/video/universe.mp4'
import sunset from './components/assets/video/sunset.mp4'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import AboutVideo from './components/views/home/about/videoSection';
import AboutText from './components/views/home/about/textSection';

const App = () => {

  const [ref, { left, top }] = useMeasure()
  const [scrollPosition, setScrollPosition] = useState(0);
  const parallaxRef = useRef()

  const [device, setDevice] = useState('LAPTOP')
  const [layer, setLayer] = useState()
  const [theme, setTheme] = useState('dark')
  const trans = (x, y) => `translate3d(${x}px,${y + scrollPosition}px,0) translate3d(-50%,-50%,0)`

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

  const handleMouseMove = e => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }

  const handleTheme = (e) => {
    if (e.target.checked) setTheme('dark')
    else setTheme('light')
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove}>
      <Parallax ref={parallaxRef} pages={5} className={`App-${theme}`}>
        <ParallaxLayer speed={0.5} sticky={{ start: 0, end: 5 }} style={{ height: '0px' }}>
          {trail.map((props, index) => (
            <animated.div className='majorFollower' key={index} style={{ transform: props.xy.to(trans) }} />
          ))}
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} sticky={{ start: 0, end: 5 }} style={{ height: '0px', top: '40px' }}>
          <Navbar device={device} theme={theme} handleTheme={handleTheme} layer={layer} />
        </ParallaxLayer>
        <ParallaxLayer speed={-0.1} offset={0}>
          <Home theme={theme} device={device} />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={1}>
          <div className='videoCard'>
            {theme === 'dark' ? <VideoCard src={universe} /> : <VideoCard src={sunset} />}
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} offset={2} sticky={{ start: 2, end: 3 }} style={{ height: '0px' }} onMouseEnter={() => setLayer("EXPLORE")} onMouseLeave={() => setLayer('')}>
          <div className='about-videoCard'>
            {theme === 'dark' ? <AboutVideo src={universe} /> : <AboutVideo src={sunset} />}
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={1.2} offset={2.9}>
          <AboutText theme={theme} device={device} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={4} onClick={() => parallaxRef.current.scrollTo(1)}>
          <Home theme={theme} device={device} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App;