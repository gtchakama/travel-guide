import React from 'react';
import { Container, Row, Col, Spinner } from "react-bootstrap";

const SpinnerIcon = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 5 }}>
                        <>

                            <Spinner animation="border" variant="warning" />


                        </>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SpinnerIcon;