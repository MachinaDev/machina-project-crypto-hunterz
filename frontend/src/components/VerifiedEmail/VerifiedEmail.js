import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core/';

import useStyles from './styles';

const VerifiedEmail = () => {
  const classes = useStyles();

  return (
    <div className={classes.verified_container}>
      <Typography className={classes.verified_message} variant="h3">
        Bien joué. Votre email a bien été vérifié.
      </Typography>
      <Typography className={classes.verified_message} variant="h4">
        Connectez-vous pour proposer votre premier projet.
      </Typography>
      <Button className={classes.verified_button} component={Link} to="/auth" variant="outlined">
        Se Connecter
      </Button>
    </div>
  );
};
export default VerifiedEmail;
