import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  heading: {
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    }
  },
  appBar__button: {
    borderColor: '#c80c81',
    color: '#c80c81',
    minWidth: '13em',
    [theme.breakpoints.down('sm')]: {
      width: '15em',
      margin: '3px'
    }
  },
  login__button: {
    backgroundColor: '#c80c81',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      width: '20em'
    }
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center'
    }
  },
  logout: {
    marginLeft: '20px',
    backgroundColor: '#c80c81',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      width: '10em',
      borderRadius: '10px',
      fontSize: '10px',
      marginLeft: '5em'
    }
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2em'
    }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: '#c80c81'
  }
}));
