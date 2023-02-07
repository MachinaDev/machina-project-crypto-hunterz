import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '600px',
    maxHeight: '600px',
    boxShadow: '2px 2px 2px grey',
    borderRadius: '10px',
    background: 'linear-gradient(90deg, rgba(255,147,147,0.9023984593837535) 0%, rgba(200,12,129,0.7903536414565826) 41%, rgba(91,145,156,0.7987570028011204) 100%)',
    [theme.breakpoints.down('sm')]: {
      height: '500px',
      maxHeight: '500px',
      width: '90%',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center'
    }
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '5em',
    marginTop: '0.8em'
  },
  subtitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '1em'
  },
  logo_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5em'
  },
  subtitle_machina: {
    fontSize: '2em',
    marginRight: '0.5em'
  },
  logo: {
    width: '70px',
    height: '70px'
  },
  button: {
    width: '15em',
    height: '3.5em',
    color: '#ffff',
    backgroundColor: '#c80c81',
    borderRadius: '30px'
  },
  span__color: {
    color: '#c80c81'
  }
}));

// 0545387074
// 0545387144 cartreau
