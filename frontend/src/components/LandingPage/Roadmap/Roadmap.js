import React from 'react';

import { Typography } from '@material-ui/core/';
import Star from '@material-ui/icons/Star';

import useStyles from './styles';

const Roadmap = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header__container}>
        <Typography className={classes.title} gutterBottom variant="h3" component="h3">
          <span className={classes.span__color}> Crypto Hunter Z</span> roadmap
        </Typography>
        <Typography className={classes.subtitle} gutterBottom variant="h5" component="p">
          Un projet durable avec des bases solides et une communauté grandissante
        </Typography>
      </div>
      <div className={classes.roadmap__timeline__containers}>
        <div>
          <Star className={classes.roadmap__icons} />
          <Typography className={classes.roadmap__time} gutterBottom variant="h6" component="p">
            Q1, 2022
          </Typography>
          <div className={classes.roadmap__timeline__container}>
            <div className={classes.roadmap__timeline__ball}></div>
            <div className={classes.roadmap__timeline__ligne}></div>
          </div>
          <Typography className={classes.roadmap__subtitle} gutterBottom variant="h6" component="p">
            Campagne Marketing
          </Typography>
          <ul>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Lancement du Discord
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Développement Twitter
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Selection du meilleur projet
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <Star className={classes.roadmap__icons} />
          <Typography className={classes.roadmap__time} gutterBottom variant="h6" component="p">
            Q2, 2022
          </Typography>
          <div className={classes.roadmap__timeline__container}>
            <div className={classes.roadmap__timeline__ball}></div>
            <div className={classes.roadmap__timeline__ligne}></div>
          </div>
          <Typography className={classes.roadmap__subtitle} gutterBottom variant="h6" component="p">
            Développement Web3
          </Typography>
          <ul>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Lancement du Swap
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Mise en place DAO
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Gestion de portofolio
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <Star className={classes.roadmap__icons} />
          <Typography className={classes.roadmap__time} gutterBottom variant="h6" component="p">
            Q3, 2022
          </Typography>
          <div className={classes.roadmap__timeline__container}>
            <div className={classes.roadmap__timeline__ball}></div>
            <div className={classes.roadmap__timeline__ligne}></div>
          </div>
          <Typography className={classes.roadmap__subtitle} gutterBottom variant="h6" component="p">
            Création d'un Token
          </Typography>
          <ul>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Vote de Gouvernance
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Intégration Hathor
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Intégration Dag
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <Star className={classes.roadmap__icons} />
          <Typography className={classes.roadmap__time} gutterBottom variant="h6" component="p">
            Q4, 2022
          </Typography>
          <div className={classes.roadmap__timeline__container}>
            <div className={classes.roadmap__timeline__ball}></div>
            <div className={classes.roadmap__timeline__ligne}></div>
          </div>
          <Typography className={classes.roadmap__subtitle} gutterBottom variant="h6" component="p">
            Staking
          </Typography>
          <ul>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Vote des rewards
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Augmentation liquidités
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Crypto Rewards
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <Star className={classes.roadmap__icons} />
          <Typography className={classes.roadmap__time} gutterBottom variant="h6" component="p">
            Q1, 2023
          </Typography>
          <div className={classes.roadmap__timeline__container}>
            <div className={classes.roadmap__timeline__ball}></div>
            <div className={classes.roadmap__timeline__ligne}></div>
          </div>
          <Typography className={classes.roadmap__subtitle} gutterBottom variant="h6" component="p">
            Launchpad Venture
          </Typography>
          <ul>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Partenariat de lancement
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Lancement Medium
              </Typography>
            </li>
            <li>
              <Typography className={classes.roadmap__list__item} gutterBottom component="p">
                Pool de farming
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
