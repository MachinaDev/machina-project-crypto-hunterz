import React from 'react';

import { Typography, Avatar, Button, Link } from '@material-ui/core/';

import Twitter from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';

import boredApeOne from '../../../images/th.jpg';
import boredApeTwo from '../../../images/th2.jpg';
import boredApeThree from '../../../images/th3.jpg';
import boredApeFourth from '../../../images/th4.jpg';

import useStyles from './styles';

const Team = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header__container}>
        <Typography className={classes.title} gutterBottom variant="h3" component="h3">
          Notre <span className={classes.span__color}>Team</span>
        </Typography>
      </div>
      <div className={classes.teams__container}>
        <div className={classes.team__member__containers}>
          <div className={classes.team__member__presentation}>
            <div className={classes.team__avatar_div}>
              <Avatar className={classes.team__member__avatar} alt="Maxime NOEL" src={boredApeOne} />
            </div>

            <Typography className={classes.team__member__name} gutterBottom variant="h6" component="p">
              Maxime NOEL
            </Typography>
            <Typography className={classes.team__member__skill} gutterBottom variant="h6" component="p">
              PDG & Fondateur
            </Typography>
          </div>
          <div className={classes.team__member__links}>
            <Button className={classes.social__links__buttons}>
              <Link href="https://machina-dev.com" target="_blank">
                <LanguageIcon className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
            <Button className={classes.social__links__buttons}>
              <Link href="https://twitter.com/Machina_Dev" target="_blank">
                <Twitter className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
            <Button className={classes.social__links__buttons}>
              <Link href="https://www.linkedin.com/in/maxime-noel-machina/" target="_blank">
                <LinkedInIcon className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
          </div>
        </div>
        <div className={classes.team__member__containers}>
          <div className={classes.team__member__presentation}>
            <div className={classes.team__avatar_div}>
              <Avatar className={classes.team__member__avatar} alt="Maxime NOEL" src={boredApeFourth} />
            </div>

            <Typography className={classes.team__member__name} gutterBottom variant="h6" component="p">
              Amixem ONEL
            </Typography>
            <Typography className={classes.team__member__skill} gutterBottom variant="h6" component="p">
              Back Developper
            </Typography>
          </div>
          <div className={classes.team__member__links}>
            <Button className={classes.social__links__buttons}>
              <Link href="https://machina-dev.com" target="_blank">
                <LanguageIcon className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
            <Button className={classes.social__links__buttons}>
              <Link href="https://twitter.com/Machina_Dev" target="_blank">
                <Twitter className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
            <Button className={classes.social__links__buttons}>
              <Link href="https://www.linkedin.com/in/maxime-noel-machina/" target="_blank">
                <LinkedInIcon className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
          </div>
        </div>
        <div className={classes.team__member__containers}>
          <div className={classes.team__member__presentation}>
            <div className={classes.team__avatar_div}>
              <Avatar className={classes.team__member__avatar} alt="Maxime NOEL" src={boredApeThree} />
            </div>
            <Typography className={classes.team__member__name} gutterBottom variant="h6" component="p">
              Lenox IMAME
            </Typography>
            <Typography className={classes.team__member__skill} gutterBottom variant="h6" component="p">
              Front Developper
            </Typography>
          </div>
          <div className={classes.team__member__links}>
            <Button className={classes.social__links__buttons}>
              <Link href="https://machina-dev.com" target="_blank">
                <LanguageIcon className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
            <Button className={classes.social__links__buttons}>
              <Link href="https://twitter.com/Machina_Dev" target="_blank">
                <Twitter className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
            <Button className={classes.social__links__buttons}>
              <Link href="https://www.linkedin.com/in/maxime-noel-machina/" target="_blank">
                <LinkedInIcon className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
          </div>
        </div>
        <div className={classes.team__member__containers}>
          <div className={classes.team__member__presentation}>
            <div className={classes.team__avatar_div}>
              <Avatar className={classes.team__member__avatar} alt="Maxime NOEL" src={boredApeTwo} />
            </div>

            <Typography className={classes.team__member__name} gutterBottom variant="h6" component="p">
              Maxime LEON
            </Typography>
            <Typography className={classes.team__member__skill} gutterBottom variant="h6" component="p">
              Marketing
            </Typography>
          </div>
          <div className={classes.team__member__links}>
            <Button className={classes.social__links__buttons}>
              <Link href="https://machina-dev.com" target="_blank">
                <LanguageIcon className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
            <Button className={classes.social__links__buttons}>
              <Link href="https://twitter.com/Machina_Dev" target="_blank">
                <Twitter className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
            <Button className={classes.social__links__buttons}>
              <Link href="https://www.linkedin.com/in/maxime-noel-machina/" target="_blank">
                <LinkedInIcon className={classes.team__member__links} fontSize="medium" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
