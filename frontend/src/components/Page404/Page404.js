import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core/';

import useStyles from './styles';

const Page404 = () => {
  const classes = useStyles();

  return (
    <div className={classes.error_container}>
      <Typography className={classes.error_number} variant="h2">
        Erreur <span className={classes.span__color}>4</span>0<span className={classes.span__color}>4</span>
      </Typography>
      <Typography className={classes.error_text} variant="h4">
        Désolé. La page que vous recherchez n'existe pas pour le moment...
      </Typography>
      <Button className={classes.error_button} component={Link} to="/" variant="outlined">
        Revenir à l'accueil
      </Button>
    </div>
  );
};
export default Page404;
