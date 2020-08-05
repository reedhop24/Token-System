import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

const HomeScreen = (props) => {
    return(
        <Container>
           <Row style={{backgroundColor:"#379683", marginBottom:"5%", borderRadius:"5px"}}>
               <Col>
                    <h1>hey, congrats on logging in</h1>
               </Col>
           </Row>
           <Row>
               <Col xs={3}/>
               <Col xs={6} style={{backgroundColor:"#379683", marginBottom:"5%", borderRadius:"5px", padding:"10px"}}>
                    <p>whats up! thank you for checking out my token system.</p>
                    <button className="button" style={{marginBottom:"5%"}} onClick={() => props.logout()}>want to log out?</button>
               </Col>
               <Col xs={3}/>
           </Row>
        </Container>
    )
}

export default HomeScreen;