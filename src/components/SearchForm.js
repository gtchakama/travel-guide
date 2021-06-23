import React, { useState, useEffect } from 'react';
import { Form, Col, Row } from "react-bootstrap";
import { Container } from '@material-ui/core';


const SearchForm = ({ SetSearchTerm }) => {

    const [inputText, setInputText] = useState('')


    useEffect(() => {
        SetSearchTerm(inputText)
    })


    const handleInputChange = (e) => {
        setInputText(e.target.value)
        SetSearchTerm(inputText)
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>

                    <Form style={{ marginTop: 18 }}>
                        <Form.Group as={Row} >
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Country Name"
                                    value={inputText}
                                    onChange={handleInputChange}
                                />
                            </Col>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchForm;