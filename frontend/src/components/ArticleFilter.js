import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  root: {
    width: 300,
  },
}));


function valuetext(value) {
  return `${value}`;
}

export default function DialogSelect () {
   

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [practices, setPractices] = React.useState('');
  const [strength, setstrength] = React.useState('');
  const [value, setValue] = React.useState([2000, 2021]);

  

  const sliderHandleChange = (event, newValue) => {
    setValue(newValue);
  };

  const practicesHandleChange = (event) => {
    setPractices(event.target.value);
  };

  const strengthHandleChange = (event) => {
    setstrength(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };


  // https://stackoverflow.com/questions/41619166/react-can-a-child-component-send-value-back-to-parent-form

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Filter</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <Typography id="range-slider" gutterBottom>
                Year range
              </Typography>
              <Slider
                value={value}
                onChange={sliderHandleChange}
                min={2000}
                max={2021}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">practices</InputLabel>
              <Select
                labelId="demo-dialog-select-label"Ten
                id="demo-dialog-select"
                value={practices}
                onChange={practicesHandleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="TDD">	TDD or Test Driven Development</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">strength</InputLabel>
              <Select
                labelId="demo-dialog-select-label"Ten
                id="demo-dialog-select"
                value={strength}
                onChange={strengthHandleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Strongly Support">Strongly Support</MenuItem>
                <MenuItem value="Support">Support</MenuItem>
                <MenuItem value="Disagree">Disagree</MenuItem>
                <MenuItem value="Strongly Disagree">Strongly Disagree</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
