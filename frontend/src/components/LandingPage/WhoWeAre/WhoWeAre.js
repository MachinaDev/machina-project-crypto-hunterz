import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Button, Card, CardContent } from '@material-ui/core/';

import cryptohunterzText from '../../../images/cryptohunterzLogo2.png';

import useStyles from './styles';

const WhoWeAre = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.title__container}>
          <Typography className={classes.title} gutterBottom variant="h3" component="h3">
            Qu'est ce que <span className={classes.span__color}> Crypto Hunter Z</span> ?
          </Typography>
          <Typography className={classes.subtitle} gutterBottom variant="h4" component="h4">
            Bienvenue sur le réseau social dédié aux chercheurs de pépites.
          </Typography>
        </div>

        <div className={classes.second__container}>
          <div className={classes.left__container}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.card__title} variant="h5" component="h4">
                  Un lieu accessible à tous
                </Typography>
                <Typography className={classes.card__spec} component="p">
                  {bull} Si vous aimez la crypto : Bienvenue
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.card__title} variant="h5" component="h4">
                  Partagez vos découvertes
                </Typography>
                <Typography className={classes.card__spec} component="p">
                  {bull} Vous avez trouvez une pépite et souhaitez la partager.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.card__title} variant="h5" component="h4">
                  Gagnez du temps
                </Typography>
                <Typography className={classes.card__spec} component="p">
                  {bull} Trop de projets à étudier ? Les meilleurs sont ici !
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography className={classes.card__title} variant="h5" component="h4">
                  Suivi l'évolution
                </Typography>
                <Typography className={classes.card__spec} component="p">
                  {bull} Suivez l'évolution des meilleurs projets
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className={classes.right__container}>
            <img className={classes.image} src={cryptohunterzText} alt="icon" height="480px" />
          </div>
        </div>
        <div className={classes.button_container}>
          <Button className={classes.who_we_are__button} component={Link} to="/faq" variant="contained">
            En savoir plus
          </Button>
        </div>
      </div>
    </>
  );
};
export default WhoWeAre;
