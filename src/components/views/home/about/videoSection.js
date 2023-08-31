import React, { useEffect, useRef } from 'react'
import { Col, Row } from 'react-bootstrap'

const AboutVideo = ({ src }) => {
    const videoRef = useRef()

    useEffect(() => {
        videoRef.current?.load()
    }, [src])

    return (
        <Row>
            <Col lg={3} style={{ padding: '40px', marginTop: '30px' }}>
                <video autoPlay loop muted ref={videoRef}>
                    <source src={src} type='video/mp4'></source>
                </video>
            </Col>
            <Col>
            </Col>
        </Row>
    )
}

export default AboutVideo