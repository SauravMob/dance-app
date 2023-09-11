import React from 'react'
import { Col, Row } from 'react-bootstrap'
import leftNight from '../../assets/images/left-night.jpg'
import rightNight from '../../assets/images/right-night.jpg'
import leftDay from '../../assets/images/left-day.jpg'
import rightDay from '../../assets/images/right-day.jpg'

const SplitSection = ({ theme }) => {
    return (
        <Row className="split-section">
            <Col className="recreationalDance">
                <Row>
                    <h1 className="d-flex justify-content-center alig-items-center">
                        Recreational Dance
                    </h1>
                </Row>
                <Row className="splitSection-image mt-3">
                    <img src={theme === "dark" ? leftNight : leftDay} height="100%" width="100%" />
                </Row>
                <Row className="mt-5">
                    <div className="container">
                        <div className="btn"><a href="#">Take a class</a></div>
                    </div>
                </Row>
            </Col>
            <Col className="professionalDance">
                <Row>
                    <h1 className="d-flex justify-content-center alig-items-center">
                        Professional Dance
                    </h1>
                </Row>
                <Row className="splitSection-image mt-3">
                    <img src={theme === "dark" ? rightNight : rightDay} height="100%" width="100%" />
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