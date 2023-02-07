import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Button } from '@material-ui/core/';

import useStyles from './styles';

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Typography className={classes.title} gutterBottom variant="h2" component="h1">
          Crypto Hunter <span className={classes.span__color}>Z</span>
        </Typography>
        <Typography className={classes.subtitle} variant="h3" component="h2">
          Devenez acteur de la communauté des chasseurs de cryptos
        </Typography>
        <div className={classes.logo_container}>
          <Typography className={classes.subtitle_machina} variant="h3" component="h2">
            By MachinaDev
          </Typography>
          <img className={classes.logo} src="machinaLogo.png" alt="machinaDev_Logo" />
        </div>
        <Button component={Link} className={classes.button} to="/projects" variant="contained">
          Découvrir les projets
        </Button>
      </div>
    </>
  );
};
export default Hero;
