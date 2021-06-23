import "../App.css";
import React from "react";

import SpinnerIcon from "./SpinnerIcon";
import uuid from "react-uuid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  paper2: {
    width: "100%",
  },
}));

const Country = ({ country, isLoading }) => {
  const classes = useStyles();

  console.log("COUNTRY", country);
  if (country.length < 0 || isLoading) {
    return <SpinnerIcon />;
  }

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                <span>Country Name:</span> {country.name}
              </Typography>
              <Typography variant="h5" gutterBottom>
                <span>Capital:</span> {country.capital}
              </Typography>
              <Typography variant="h5" gutterBottom>
                <span>Region:</span> {country.region}
              </Typography>
              <Paper className={classes.paper2}>
                <img
                  src={country.flag}
                  style={{ width: "100%" }}
                  alt="Flag"
                  srcset=""
                />
              </Paper>
              <Typography variant="body1" gutterBottom>
                <h3>Languages: {country.languages.length}</h3>
                {country.languages.map((language) => {
                  return (
                    <div key={uuid()}>
                      <p>
                        <span>Name:</span> {language.name}
                      </p>
                      <p>
                        <span>Native Name:</span> {language.nativeName}
                      </p>
                    </div>
                  );
                })}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                <span>Population:</span> {country.population}
              </Typography>
              <h3>
                <span>Total Borders:</span> {country.borders.length}
              </h3>
              {country.borders.map((border) => {
                return (
                  <div key={uuid()}>
                    <ul>
                      <li>{border}</li>
                    </ul>
                  </div>
                );
              })}

              <Typography variant="h5" gutterBottom>
                <span>Currencies: </span> {country.currencies.length}
              </Typography>
              <div>
                {country.currencies.map((currency) => {
                  return (
                    <ul key={uuid()}>
                      <li>Name: {currency.name}</li>
                      <li>Symbol: {currency.symbol}</li>
                    </ul>
                  );
                })}
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <Typography
               
                variant="body2"
                gutterBottom
              >
                A project By George
              </Typography>
              <GitHubIcon/>
              <TwitterIcon/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Country;
