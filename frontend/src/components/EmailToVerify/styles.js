import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  verified_container: {
    display: 'flex',
    flexDirection: 'column'
  },
  verified_message: {
    marginLeft: '0.5em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    fontWeight: 'bold'
  },

  verified_button: {
    marginLeft: '1.5em',
    marginTop: '0.9em',
    marginBottom: '0.5em',
    backgroundColor: '#c80c81',
    color: 'white',
    borderColor: '#c80c81',
    minWidth: '13em',
    maxWidth: '13em'
  }
}));
