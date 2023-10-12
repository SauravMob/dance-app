import { Fragment, useEffect, useRef, useState } from 'react'
import { useTrail, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import './App.css'
import Navbar from './components/navbar/index'
import Home from './components/home'
import Carousel from './components/home/carousel'
import SplitSection from './components/home/splitSection'
import Footer from './components/footer'
import { Element } from 'react-scroll'

const App = () => {

  const [ref, { left, top }] = useMeasure()
  const target = useRef()

  const [scrollY, setScrollY] = useState(0)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Variables
  const trans = (x, y) => `translate3d(${x}px,${y + scrollY}px,0) translate3d(-50%,-50%,0)`

  // Hooks
  const [trail, api] = useTrail(1, i => ({
    xy: [0, 0],
    config: { mass: 10, tension: 250, friction: 30 },
  }))

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

  return (
    <>
    {loading ? (
      <div className='loading'><div className='loader'></div></div>
      ) : (
      <div ref={ref} className='App' onMouseMove={handleMouseMove}>
        {trail.map((props, index) => (
          <animated.div className='majorFollower' key={index} style={{ transform: props.xy.to(trans) }} />
        ))}
        <Navbar />
        <Fragment>
          <Element name="home" className="home">
            <Home target={target} />
          </Element>
        </Fragment>
        <Fragment>
          <Element name="splitSection" className="splitSection">
            <SplitSection />
          </Element>
        </Fragment>
        <Fragment>
          <Element name="carousels" className="carousels">
            <Carousel />
          </Element>
        </Fragment>
        <Fragment>
          <Footer />
        </Fragment>
      </div>
      )}
    </>
  )
}

export default App
