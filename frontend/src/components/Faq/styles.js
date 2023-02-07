import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1em',
    backgroundColor: '#f7f8fb'
  },
  faq__header__container: {
    display: 'flex',
    width: '100%',
    height: '200px',
    justifyContent: 'center',
    backgroundColor: '#c80c81',
    borderRadius: '10px',
    color: 'white,'
  },
  faq__header__title: {
    marginTop: '1em',
    fontWeight: 'bold',
    fontSize: '4em',
    color: 'white'
  },
  faq__sections: {
    margin: '1em',
    fontWeight: 'bold',
    fontSize: '2em'
  },
  faq__qa__container: {
    width: '70em',
    marginTop: '2em'
  },
  faq__q__container: {
    display: 'flex',
    width: '65em',
    height: '5em',
    backgroundColor: '#dce3e3',
    borderLeft: 'solid 0.4em #c80c81',
    alignItems: 'center'
  },
  faq__span__q: {
    marginLeft: '0.2em',
    color: '#c80c81',
    fontSize: '3em'
  },
  faq__q__question: {
    fontStyle: 'italic',
    marginLeft: '1em'
  },
  faq__a__container: {
    display: 'flex',
    width: '65em',
    height: '5em',
    backgroundColor: '#dce3e3',
    borderLeft: 'solid 0.4em #c80c81',
    alignItems: 'center'
  },
  faq__span__a: {
    marginLeft: '0.2em',
    color: '#c80c81',
    fontSize: '3em'
  },
  faq__a__answer: {
    marginLeft: '1em'
  }
}));
