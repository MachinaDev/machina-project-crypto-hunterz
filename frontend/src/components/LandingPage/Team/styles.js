import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '400px',
    maxHeight: '600px',
    marginBottom: '6em',
    backgroundColor: '#f7f8fb',
    [theme.breakpoints.down('sm')]: {
      height: '950px',
      maxHeight: '950px'
    }
  },
  header__container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: '2em'
  },
  teams__container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  team__member__containers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1.5em',
    marginRight: '1.5em'
  },
  title: {
    fontWeight: 'bold'
  },
  team__member__presentation: {
    textAlign: 'center'
  },
  team__avatar_div: {
    display: 'flex',
    justifyContent: 'center'
  },
  team__member__avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12)
  },
  team__member__name: {
    fontWeight: 'bold',
    color: '#c80c81',
    marginBottom: '0.1em'
  },
  team__member__skill: {
    fontSize: '0.9em',
    marginBottom: '0.2em'
  },
  team__member__links: {
    marginBottom: '0.5em',
    color: 'grey'
  },
  span__color: {
    color: '#c80c81'
  }
}));
