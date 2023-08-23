import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navbars = () => {

  const [active, setActive] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [position, setPosition] = useState(0)

  const handleMouseMove = (event) => {
    if (event.clientX > 430 && event.clientX < 964) {
      setPosition(event.clientX)
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const onActiveChange = (tab) => {
    setActiveLink(tab)
  }

  const onNavEnter = (value) => {
    setActive(value)
    if (!value) setActiveLink('')
  }

  return (
    <Navbar expand="lg" className="mt-4 bg-body-tertiary">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav onMouseEnter={() => onNavEnter(true)} onMouseLeave={() => onNavEnter(false)} className='mouse-follower'>
          <Nav.Link onMouseEnter={() => onActiveChange('1')} className={activeLink === '1' && 'link-active'}>Let's Explore</Nav.Link>
          <Nav.Link onMouseEnter={() => onActiveChange('2')} className={activeLink === '2' && 'link-active'}>Let's Meet</Nav.Link>
          <Nav.Link onMouseEnter={() => onActiveChange('3')} className={activeLink === '3' && 'link-active'}>Let's Attend</Nav.Link>
          <Nav.Link onMouseEnter={() => onActiveChange('4')} className={activeLink === '4' && 'link-active'}>Let's Dance</Nav.Link>
          {active && <div className="follower" style={{ left: position, top: '62px' }}></div>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbars