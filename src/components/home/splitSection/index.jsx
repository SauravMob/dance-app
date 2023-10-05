import React from 'react'
import { Col, Row } from 'react-bootstrap'
import leftDay from '../../assets/images/left-day.jpg'
import rightDay from '../../assets/images/right-day.jpg'

const SplitSection = () => {
    return (
        <Row className="split-section">
            <Col className="recreationalDance">
                <Row>
                    <h2 className="d-flex justify-content-center alig-items-center">
                        Recreational Dance
                    </h2>
                </Row>
                <Row className="splitSection-image mt-3">
                    <img src={leftDay} height="100%" width="100%" />
                </Row>
                <Row className="mt-5">
                    <div className="container">
                        <div className="btn"><a href="#">Take a class</a></div>
                    </div>
                </Row>
            </Col>
            <Col className="professionalDance">
                <Row>
                    <h2 className="d-flex justify-content-center alig-items-center">
                        Professional Dance
                    </h2>
                </Row>
                <Row className="splitSection-image mt-3">
                    <img src={rightDay} height="100%" width="100%" />
                </Row>
                <Row className="mt-5">
                    <div className="container">
                        <div className="btn"><a href="#">Find Training</a></div>
                    </div>
                </Row>
            </Col>
        </Row>
    )
}

export default SplitSection