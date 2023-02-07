import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  ul: {
    justifyContent: 'space-around',
    '& .MuiPaginationItem-root': {
      backgroundColor: 'white',
      borderColor: '#c80c81'
    }
  }
}));
