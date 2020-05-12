import React from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import Signup from '../SignUp/Signup';
import { Link, Route } from "react-router-dom";

function Login() {
    return (
        <div>
            <Container fluid>
                <Row className="container-row">
                    <Col sm></Col>
                    <Col sm className="signup-container">
                        <div className="heading">
                            <h3>Hello. Welcome</h3>
                            {/* <small>Sign up here!</small> */}
                        </div>
                        <Form className="form-container">


                            <Form.Group controlId="formGridEmail">
                                <small>Email</small>
                                <Form.Control placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <small>Password</small>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>


                            <Button className="submit-btn" variant="success" type="submit">
                                Submit
                             </Button>
                        </Form>
                        <div className="note-to-login">
                            <small >New to SiteTitle ?
                    <Link to="/Signup"><span className="login-link">  Sign Up here</span></Link>
                            </small>
                        </div>
                    </Col>
                    <Col sm></Col>
                </Row>
            </Container>

            <Route path="/Signup" component={Signup} />
        </div>
    )
}

export default Login