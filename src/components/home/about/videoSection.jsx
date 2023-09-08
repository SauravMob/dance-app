import React, { useEffect, useRef } from 'react'
import { Col, Row } from 'react-bootstrap'

const AboutVideo = ({ src }) => {
    const videoRef = useRef()

    useEffect(() => {
        videoRef.current?.load()
    }, [src])

    return (
        <div className='about-videoCard'>
            <Row>
                <Col lg={3} className='d-flex justify-content-center align-items-center'>
                    <video autoPlay loop muted ref={videoRef}>
                        <source src={src} type='video/mp4'></source>
                    </video>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}

export default AboutVideo