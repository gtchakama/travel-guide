import React from "react";

import SpinnerIcon from "./SpinnerIcon";
import uuid from "react-uuid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid> */}

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                Country Name: {country.name}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Capital: {country.capital}
              </Typography>
              <Typography variant="h5" gutterBottom>
                Region: {country.region}
              </Typography>
              <Paper className={classes.paper2}>
                <img
                  src={country.flag}
                  style={{ width: "100%" }}
                  alt=""
                  srcset=""
                />
              </Paper>
              <Typography variant="body1" gutterBottom>
                <h3>Languages</h3>
                {country.languages.map((language) => {
                  return (
                    <div key={uuid()}>
                      <p>Name: {language.name}</p>
                      <p>Native Name: {language.nativeName}</p>
                    </div>
                  );
                })}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                Population: {country.population}
              </Typography>
              <h3>Total Borders: {country.borders.length}</h3>
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
                Currencies
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
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Country;
