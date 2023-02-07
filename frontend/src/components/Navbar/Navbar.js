import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import cryptohunterzText from '../../images/cryptohunterzLogo2.png';
import * as actionType from '../../constants/actionTypes';

import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={cryptohunterzText} alt="icon" height="65px" />
      </Link>
      <Button className={classes.appBar__button} component={Link} to="/projects" variant="outlined">
        Liste des projets
      </Button>
      <Button className={classes.appBar__button} component={Link} to="/create-projects" variant="outlined">
        Présenter un projet
      </Button>
      <Button className={classes.appBar__button} component={Link} to="/faq" variant="outlined">
        FAQ
      </Button>

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button variant="contained" className={classes.logout} onClick={logout}>
              Se déconnecter
            </Button>
          </div>
        ) : (
          <Button className={classes.login__button} component={Link} to="/auth" variant="contained">
            Se connecter
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
