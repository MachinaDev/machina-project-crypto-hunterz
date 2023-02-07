import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '200px',
    maxHeight: '600px',
    marginBottom: '1em',
    backgroundColor: '#f7f8fb',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row'
    }
  },
  logo__container: {
    display: 'flex',
    alignItems: 'center'
  },
  copyright__container: {
    marginTop: '1em'
  },
  copyright__text: {
    fontSize: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7em'
    }
  },
  span__color: {
    color: '#c80c81'
  }
}));
