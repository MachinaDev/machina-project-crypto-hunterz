import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '400px',
    maxHeight: '600px',
    marginBottom: '5em',
    backgroundColor: '#f7f8fb'
  },
  header__container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },

  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2.5em',
    marginBottom: '1.2em'
  },
  subtitle: {
    width: '50%',
    textAlign: 'center',
    fontSize: '1.2em',
    marginBottom: '1.4em',
    [theme.breakpoints.down('sm')]: {
      width: '300px'
    }
  },

  social__links__containers: {
    display: 'flex',
    justifyContent: 'space-around',
    color: '#c80c81',
    [theme.breakpoints.down('sm')]: {
      width: '300px'
    }
  },

  social__links__buttons: {
    marginLeft: '1em',
    marginRight: '1em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2px',
      marginRight: '2px'
    }
  },
  social__links__icons: {
    color: '#c80c81'
  },
  span__color: {
    color: '#c80c81'
  }
}));
