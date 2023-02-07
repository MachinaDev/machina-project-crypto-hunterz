import React from 'react';

import { Typography } from '@material-ui/core/';

import useStyles from './styles';

const Faq = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.faq__header__container}>
        <Typography className={classes.faq__header__title} gutterBottom variant="h1" component="h1">
          CryptoHunterZ FAQ ?
        </Typography>
      </div>
      <div className={classes.faq__sections}> 1. Questions Générales</div>
      <div className={classes.faq__qa__container}>
        <div className={classes.faq__q__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              Q.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__q__question} gutterBottom component="p">
              Ai-je besoin d'un compte CryptoHunterZ pour utiliser le service CryptoHunterZ ?
            </Typography>
          </div>
        </div>
        <div className={classes.faq__a__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              R.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__a__answer} gutterBottom component="p">
              Pour utiliser certains services, vous devez avoir créé un compte CryptoHunterZ et avoir accepté les termes du contrat relatif au compte CryptoHunterZ.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.faq__qa__container}>
        <div className={classes.faq__q__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              Q.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__q__question} gutterBottom component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor dignissimos quod! Quod corporis rem maxime pariatur ?
            </Typography>
          </div>
        </div>
        <div className={classes.faq__a__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              R.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__a__answer} gutterBottom component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae qui doloribus eius alias, ipsum sint quo eaque dicta autem veritatis necessitatibus vero laudantium corporis aspernatur deserunt repudiandae reprehenderit nisi
              adipisci.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.faq__qa__container}>
        <div className={classes.faq__q__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              Q.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__q__question} gutterBottom component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor dignissimos quod! Quod corporis rem maxime pariatur ?
            </Typography>
          </div>
        </div>
        <div className={classes.faq__a__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              R.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__a__answer} gutterBottom component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae qui doloribus eius alias, ipsum sint quo eaque dicta autem veritatis necessitatibus vero laudantium corporis aspernatur deserunt repudiandae reprehenderit nisi
              adipisci.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.faq__sections}> 2. Questions techniques</div>

      <div className={classes.faq__qa__container}>
        <div className={classes.faq__q__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              Q.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__q__question} gutterBottom component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor dignissimos quod! Quod corporis rem maxime pariatur ?
            </Typography>
          </div>
        </div>
        <div className={classes.faq__a__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              R.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__a__answer} gutterBottom component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae qui doloribus eius alias, ipsum sint quo eaque dicta autem veritatis necessitatibus vero laudantium corporis aspernatur deserunt repudiandae reprehenderit nisi
              adipisci.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.faq__qa__container}>
        <div className={classes.faq__q__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              Q.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__q__question} gutterBottom component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor dignissimos quod! Quod corporis rem maxime pariatur ?
            </Typography>
          </div>
        </div>
        <div className={classes.faq__a__container}>
          <div>
            <Typography className={classes.faq__span__q} component="p">
              R.
            </Typography>
          </div>
          <div>
            <Typography className={classes.faq__a__answer} gutterBottom component="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae qui doloribus eius alias, ipsum sint quo eaque dicta autem veritatis necessitatibus vero laudantium corporis aspernatur deserunt repudiandae reprehenderit nisi
              adipisci.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
