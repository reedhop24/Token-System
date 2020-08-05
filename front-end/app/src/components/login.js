import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

const Login = (props) => {
    return(
        <Container className="center">
            <Row style={{marginBottom:"10%"}}>
                <Col>
                    <h2>sign in</h2>
                </Col>
            </Row>
            <Row style={{marginBottom:"7%"}}>
                <Col>
                    <input id="input" placeholder="username" onChange={(event) => props.credentials('username', event.target.value)}></input>
                </Col>
            </Row>
            <Row style={{marginBottom:"7%"}}>
                <Col>
                    <input id="input" placeholder="password" onChange={(event) => props.credentials('password', event.target.value)}></input>
                </Col>
            </Row>
            <Row style={{marginBottom:"7%"}}>
                <Col>
                    <button className="button" onClick={() => props.getSignIn()}>sign In</button>
                </Col>
            </Row>
            <Row style={{marginBottom:"7%"}}>
                <Col>
                    <button className="button" onClick={() => props.createAccount()}>create account</button>
                </Col>
            </Row>
            {props.errorMessage ? 
            <Row style={{marginBottom:"5%"}}>
                <Col>
                    <p style={{color:"red"}}>{props.errorMessage}</p>
                </Col>
            </Row>
            : null}
        </Container>
    )
}

export default Login;