import React from "react";
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return(
        <div className="about_sec d-block d-flex">
            <Container fluid>
                <Row className="about_sec_content">
                    <Col sm={5} className="left_col">
                        <div className="left_col_content">
                            <Row>
                                <h1>about me</h1>
                            </Row>
                        
                        </div>
                    </Col>
                    <Col sm={7} className="right_col">
                        <Row>
                            <div className="right_col_content">
                                
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;