import React from 'react';

import { Typography } from '@material-ui/core/';

import LanguageIcon from '@material-ui/icons/Language';
import Timer from '@material-ui/icons/Timer';
import ForumIcon from '@material-ui/icons/Forum';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import FavoriteIcon from '@material-ui/icons/Favorite';

import useStyles from './styles';

const Features = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.header__container}>
          <Typography className={classes.title} gutterBottom variant="h3" component="h3">
            <span className={classes.span__color}> Crypto Hunter Z</span> features
          </Typography>
          <Typography className={classes.subtitle} gutterBottom variant="h5" component="p">
            Le plus important dans la Blockchain n'est pas d'être le meilleur, mais d'être le premier. Crypto Hunter Z vous permet de ne plus jamais rater une occasion et d'être toujours dans la course.
          </Typography>
        </div>
        <div className={classes.features__container}>
          <div className={classes.feature__container}>
            <LanguageIcon className={classes.feature__icons} fontSize="large" />
            <Typography className={classes.feature__title} gutterBottom variant="h5" component="p">
              Mutichain
            </Typography>
            <Typography className={classes.feature__description} gutterBottom variant="body1" component="p">
              Ce réseau est un aggregateur de tokens, peu importe la blockchain, vous trouverez le joyau qu'il vous manque.
            </Typography>
          </div>
          <div className={classes.feature__container}>
            <Timer className={classes.feature__icons} fontSize="large" />
            <Typography className={classes.feature__title} gutterBottom variant="h5" component="p">
              Gagner du temps
            </Typography>
            <Typography className={classes.feature__description} gutterBottom variant="body1" component="p">
              Vous n'avez plus besoin de scroller pendant des heures sur CoinMarketcap, CoinGecko ou autre moteur de recherche de cryptos. Le meilleur est déjà ici.
            </Typography>
          </div>
          <div className={classes.feature__container}>
            <ForumIcon className={classes.feature__icons} fontSize="large" />
            <Typography className={classes.feature__title} gutterBottom variant="h5" component="p">
              Communauté
            </Typography>
            <Typography className={classes.feature__description} gutterBottom variant="body1" component="p">
              Partagez, Apprenez, Découvrez grâce à une communauté de passionné. Vous ne serez plus jamais seul.
            </Typography>
          </div>
          <div className={classes.feature__container}>
            <ThumbsUpDownIcon className={classes.feature__icons} fontSize="large" />
            <Typography className={classes.feature__title} gutterBottom variant="h5" component="p">
              Evaluation
            </Typography>
            <Typography className={classes.feature__description} gutterBottom variant="body1" component="p">
              Tous les projets sont notés par la communauté ce qui vous empêche de faire de grosses erreurs.
            </Typography>
          </div>
          <div className={classes.feature__container}>
            <AnnouncementIcon className={classes.feature__icons} fontSize="large" />
            <Typography className={classes.feature__title} gutterBottom variant="h5" component="p">
              Dernières Informations
            </Typography>
            <Typography className={classes.feature__description} gutterBottom variant="body1" component="p">
              Les projets sont mis à jour régulièrement. Il est loin le temps où l'on cherche les adresses de contrats, les migrations ou bridge. Tout est là pour vous servir.
            </Typography>
          </div>
          <div className={classes.feature__container}>
            <FavoriteIcon className={classes.feature__icons} fontSize="large" />
            <Typography className={classes.feature__title} gutterBottom variant="h5" component="p">
              Gestion du risque
            </Typography>
            <Typography className={classes.feature__description} gutterBottom variant="body1" component="p">
              Avant d'investir, vous aurez les informations nécessaires concernant le niveau de risque de votre investissement.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
