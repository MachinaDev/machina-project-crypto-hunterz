import React from 'react';

import { Typography } from '@material-ui/core/';

import cryptohunterzText from '../../../images/cryptohunterzLogo2.png';

import useStyles from './styles';

const SocialNetworks = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logo__container}>
        <img src={cryptohunterzText} alt="crypto-hunterz-logo" height="60px" />
        <img src="machinaLogo.png" alt="machinaDev_Logo" height="45px" width="45px" />
      </div>
      <div className={classes.copyright__container}>
        <Typography className={classes.copyright__text} gutterBottom variant="h5" component="h5">
          Copyright {new Date().getFullYear()} <span className={classes.span__color}> Crypto Hunter Z</span>. Tous droits réservés.
        </Typography>
      </div>
    </div>
  );
};
export default SocialNetworks;
