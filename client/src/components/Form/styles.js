
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'rgba(255, 250, 250)',
    borderRadius: '15px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonInput: {
    backgroundColor: "#A9A9A9",
    width: '100%',
    margin: '10px 0',
    color: "#111111",
    padding: "6px 5px",
    textAlign: "left"
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
