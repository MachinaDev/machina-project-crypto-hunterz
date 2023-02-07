import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    marginTop: '10em',
    marginBottom: '10em'
  },
  first__container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    width: '100%',
    height: '400px',
    maxHeight: '600px',
    marginBottom: '12em'
  },
  title__container: {
    margin: '2.5em',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },

  title: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: '2.5em',
    marginTop: '0.8em',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: '2em'
    }
  },
  subtitle: {
    width: '100%',
    fontSize: '1.2em',
    marginBottom: '3em',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: '1em',
      marginTop: '1em',
      fontSize: '1em'
    }
  },
  second__container: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: '1em',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  left__container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '51%',
    marginLeft: '1em',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0
    }
  },
  right__container: {
    display: 'flex',
    width: '49%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  card: {
    width: '27em',
    height: '6em',
    margin: '1em',
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      marginLeft: '0'
    }
  },
  card__title: {
    fontWeight: 'bold',
    fontSize: '1.2em',
    letterSpacing: '0.1em'
  },
  card__spec: {
    fontSize: '0.8em',
    letterSpacing: '0.1em'
  },
  button_container: {
    display: 'flex',
    justifyContent: 'center'
  },

  who_we_are__button: {
    width: '15em',
    height: '3em',
    color: '#ffff',
    backgroundColor: '#c80c81',
    borderRadius: '20px'
  },
  span__color: {
    color: '#c80c81'
  },

  image: {
    marginRight: '3em'
  }
}));
