import React from 'react';
import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import SpinnerIcon from "./SpinnerIcon";
import uuid from 'react-uuid'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Country = ({ country, isLoading }) => {
  const classes = useStyles();

    console.log('COUNTRY', country)
    if (country.length < 0 || isLoading) {
        return <SpinnerIcon />
    }

    return (
       
 <div>
<Container>


<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}> <h4>Get to know the most important information about every countries in the word</h4>
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
                    </Card></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
</Container>














                 
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
                  </div>
           
          
        
    )
}

export default Country;