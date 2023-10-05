import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import { Col, Row } from 'react-bootstrap'
import { useParallax } from 'react-scroll-parallax'

const AboutVideo = ({ src }) => {

    const video = useParallax({
        translateX: [-30, 30]
    })

    return (
        <Fade duration={3000} triggerOnce={false}>
            <Row className='about-videoCard'>
                <Col lg={3} className='video-section' ref={video.ref}>
                    <video autoPlay loop muted>
                        <source src={src} type='video/mp4'></source>
                    </video>
                </Col>
                <Col className="text-section">
                    <Slide direction='right' duration={2000} triggerOnce={false}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vitae neque consequatur accusantium dolor, repudiandae cupiditate doloremque, reprehenderit accusamus error adipisci numquam voluptates ipsam blanditiis, corrupti animi molestiae? Quod assumenda iure necessitatibus non facilis cumque mollitia vero a impedit voluptatibus id magni similique, ea odio, illum nihil. Eos aliquam voluptates, quidem id nulla obcaecati.
                    </Slide>
                </Col>
            </Row>
        </Fade>
    )
}

export default AboutVideo