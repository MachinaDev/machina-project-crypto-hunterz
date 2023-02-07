import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  error_container: {
    display: 'flex',
    flexDirection: 'column'
  },
  error_number: {
    marginLeft: '0.5em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    fontWeight: 'bold'
  },
  error_text: {
    marginLeft: '1em',
    marginTop: '0.5em',
    marginBottom: '0.5em'
  },
  error_button: {
    marginLeft: '2.5em',
    marginTop: '0.9em',
    marginBottom: '0.5em',
    backgroundColor: '#c80c81',
    color: 'white',
    borderColor: '#c80c81',
    minWidth: '13em',
    maxWidth: '13em'
  },
  span__color: {
    color: '#c81c80'
  }
}));
