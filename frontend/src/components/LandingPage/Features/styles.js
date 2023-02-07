import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxHeight: '600px',
    marginBottom: '21em',
    backgroundColor: '#f7f8fb',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '1400px'
    }
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
    marginBottom: '0.8em',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  features__container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '1em',
    [theme.breakpoints.down('sm')]: {
      flexdirection: 'column'
    }
  },
  feature__container: {
    display: 'flex',
    width: '30%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2em',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  feature__title: {
    fontWeight: 'bold',
    marginBottom: '0.5em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      textAlign: 'center'
    }
  },
  feature__icons: {
    marginBottom: '0.5em',
    color: '#c80c81'
  },
  feature__description: {
    width: '80%',
    textAlign: 'center'
  },
  span__color: {
    color: '#c80c81'
  }
}));
