import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '400px',
    maxHeight: '600px',
    marginBottom: '12em',
    backgroundColor: '#f7f8fb',
    [theme.breakpoints.down('sm')]: {
      height: '1550px',
      maxHeight: '1550px'
    }
  },
  header__container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: '2em'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2.5em',
    marginBottom: '1.2em'
  },
  subtitle: {
    width: '80%',
    textAlign: 'center',
    fontSize: '1.2em',
    marginBottom: '0.8em',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  roadmap__icons: {
    marginBottom: '0.5em',
    color: '#c80c81'
  },
  roadmap__time: {
    fontWeight: 'bold',
    color: '#c80c81'
  },
  roadmap__timeline__containers: {
    margin: '1em',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },

  roadmap__timeline__container: {
    width: '225px',
    display: 'flex',
    marginTop: '15px',
    justifyContent: 'center',
    margin: '1em'
  },
  roadmap__timeline__ball: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#C80C81'
  },
  roadmap__timeline__ligne: {
    width: '100%',
    height: '5px',
    display: 'flex',
    alignSelf: 'center',
    verticalAlign: 'baseline',
    backgroundColor: '#C80C81'
  },
  roadmap__list__item: {},
  span__color: {
    color: '#c80c81'
  }
}));
