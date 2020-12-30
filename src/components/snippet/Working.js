import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Working extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
            <Container>
                <Row>
                    <h2>How does EventMploy work?</h2>
                    <p>Watch the video to see how easily EventMploy can help you find Freelancers and then get straight back to creating your amazing event!</p>
                </Row>
                <Row>
                <Col>Organizer</Col>
                <Col>Freelancer</Col>
                </Row>
                <Row>
                    <div>
                        <h1>1</h1>
                        <p>Post your Task</p>
                        <p>Post your Job Specify skills required, location, dates and pay rate to find a Freelancer to matc</p>
                    </div>
                </Row>
            </Container>
            </>
        )
    }
}

export default Working