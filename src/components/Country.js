import React from 'react';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from "react-bootstrap";
import SpinnerIcon from "./SpinnerIcon";
import uuid from 'react-uuid'


const Country = ({ country, isLoading }) => {
    console.log('COUNTRY', country)
    if (country.length < 0 || isLoading) {
        return <SpinnerIcon />
    }

    return (
        <Container>
            <Row className='m-4'>
                <Col md={{ span: 6, offset: 3 }}>
                    <h4>Get to know the most important information about every countries in the word</h4>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={country.flag} />
                        <Card.Body>
                            <Card.Title>Country Name: {country.name}</Card.Title>

                        </Card.Body>

                        <ListGroupItem>
                            <div className='p-4'>
                                <h3> Languages</h3>
                                {country.languages.map((language) => {
                                    return (
                                        <div key={uuid()}>

                                            <p>Name: {language.name}</p>
                                            <p>Native Name: {language.nativeName}</p>

                                        </div>
                                    )
                                })}
                            </div>

                        </ListGroupItem>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Calling-Code: {country.callingCodes}</ListGroupItem>
                            <ListGroupItem><span className='h3'>Population: {country.population}</span></ListGroupItem>
                            <ListGroupItem>Capital: {country.capital}</ListGroupItem>
                            <ListGroupItem>Region: {country.region}</ListGroupItem>
                            <ListGroupItem>Time-Zone: {country.timeZone}</ListGroupItem>

                        </ListGroup>
                        <ListGroupItem>Sub-Region: {country.subregion}</ListGroupItem>
                        <ListGroupItem>
                            <div className='p-4'>

                                <h3>Total Borders: {country.borders.length}</h3>
                                {country.borders.map((border) => {
                                    return (
                                        <div key={uuid()}>
                                            <ul>
                                                <li>{border}</li>
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>

                        </ListGroupItem>
                        <ListGroupItem>
                            <div className='p-4'>
                                <h3>Currencies</h3>
                                {country.currencies.map((currency) => {
                                    return (
                                        <div key={uuid()}>
                                            <p>Code: {currency.code}</p>
                                            <p>Name: {currency.name}</p>
                                            <p>Symbol: {currency.symbol}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </ListGroupItem>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Country;