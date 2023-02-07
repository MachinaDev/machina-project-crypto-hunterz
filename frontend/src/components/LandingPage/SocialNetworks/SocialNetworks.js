import React from 'react';

import { Typography, Button, Link } from '@material-ui/core/';
import Telegram from '@material-ui/icons/Telegram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

import useStyles from './styles';

const SocialNetworks = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header__container}>
        <Typography className={classes.title} gutterBottom variant="h3" component="h3">
          Suivre <span className={classes.span__color}> Crypto Hunter Z</span>
        </Typography>
        <Typography className={classes.subtitle} gutterBottom variant="h6" component="p">
          Pour avoir les dernières news de Crypto Hunter Z, suivez nous sur les réseaux !
        </Typography>
      </div>
      <div className={classes.social__links__containers}>
        <Button className={classes.social__links__buttons}>
          <Link href="http://www.telegram.org" target="_blank">
            <Telegram className={classes.social__links__icons} fontSize="large" />
          </Link>
        </Button>

        <Button className={classes.social__links__buttons}>
          <Link href="http://www.twitter.com" target="_blank">
            <Twitter className={classes.social__links__icons} fontSize="large" />
          </Link>
        </Button>

        <Button className={classes.social__links__buttons}>
          <Link href="http://www.facebook.com" target="_blank">
            <Facebook className={classes.social__links__icons} fontSize="large" />
          </Link>
        </Button>

        <Button className={classes.social__links__buttons}>
          <Link href="http://www.instagram.com" target="_blank">
            <InstagramIcon className={classes.social__links__icons} fontSize="large" />
          </Link>
        </Button>
        <Button className={classes.social__links__buttons}>
          <Link href="mailto:noreply.cryptohunterz@gmail.com?subject=Questions" target="_blank">
            <EmailIcon className={classes.social__links__icons} fontSize="large" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default SocialNetworks;
