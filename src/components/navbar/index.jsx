import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-scroll'

const index = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                <Nav className='mouse-follower'>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='nav-link'
                    >
                        Who is DMK
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='nav-link'
                    >
                        Groove with me
                    </Link>
                    <Link
                        activeClass="active"
                        to="splitSection"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='nav-link'
                    >
                        A little more
                    </Link>
                    <Link
                        activeClass="active"
                        to="carousels"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className='nav-link'
                    >
                        Let's meet
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default index