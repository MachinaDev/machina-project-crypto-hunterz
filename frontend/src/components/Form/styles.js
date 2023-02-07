import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: '10px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  identities__form: {
    display: 'flex'
  },
  tags__form: {
    width: '70%'
  },
  risk__form: {
    width: '30%',
    marginLeft: '0.5em'
  },
  website__form: {
    width: '70%',
    marginRight: '0.5em'
  },
  exchange__form: {
    width: '30%',
    marginLeft: '0.6em'
  },
  select__form: {},
  fileInput: {
    width: '97%',
    margin: '10px 0'
  },
  buttonSubmit: {
    marginBottom: 10,
    color: 'white',
    backgroundColor: '#c80c81'
  }
}));
