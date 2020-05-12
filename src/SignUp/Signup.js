import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Signup.css'
import { Link, Route } from "react-router-dom";
import Login from '../Login/Login.js'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

function Signup() {
    return (
        <div>
            <Container fluid>
                <Row className="container-row">
                    <Col sm></Col>
                    <Col sm className="signup-container">
                        <div className="heading">
                            <h3>Welcome to SiteTitle</h3>
                            <small>Sign up here!</small>
                        </div>
                        <Form className="form-container">

                            <Form.Group controlId="formGridName">
                                <small>Business Name</small>
                                <Form.Control placeholder="Business Name" />
                            </Form.Group>


                            <Form.Group controlId="formGridEmail">
                                <small>Email</small>
                                <Form.Control placeholder="Email" />
                            </Form.Group>

                            <Form.Group>
                                <small>Logo</small>
                                <Form.File
                                    id="custom-file"
                                    label="Upload logo (PNG format Only)"
                                    custom
                                />
                            </Form.Group>

                            <Form.Group className="color-container" controlId="formGridColor">
                                <small>Colour</small>
                                <InputGroup className="mb-3">
                                    <Form.Control className="colorScheme" type="color" />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="basic-addon2">Choose color</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>

                            </Form.Group>

                            <Form.Group controlId="formGridNumber">
                                <small>Mobile Number</small>
                                <Form.Control type="number" placeholder="Mobile Number" />
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
                            <small >Already have an account ?
                      <Link to="/Login"><span className="login-link">  Login</span></Link>
                            </small>
                        </div>
                    </Col>
                    <Col sm></Col>
                </Row>
            </Container>
            <Route path="/Login" component={Login} />
        </div>
    )
}

export default Signup