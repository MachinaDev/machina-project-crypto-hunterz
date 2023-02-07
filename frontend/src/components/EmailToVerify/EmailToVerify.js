import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core/';

import useStyles from './styles';

const EmailToVerify = () => {
  const classes = useStyles();

  return (
    <div className={classes.verified_container}>
      <Typography className={classes.verified_message} variant="h4">
        Nous avons bien reçu votre inscription.
      </Typography>
      <Typography className={classes.verified_message} variant="h5">
        Merci de valider votre email via le mail que nous venons de vous envoyer.
      </Typography>
    </div>
  );
};
export default EmailToVerify;
