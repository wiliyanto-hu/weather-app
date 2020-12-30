import React,{useState, useContext} from 'react';
import {WeatherContext} from './context/weatherContext.jsx'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import toggleState from './hooks/toggleState.jsx'
import inputState from './hooks/inputState.jsx'
export default function FormDialog() {
    const {changeCity} = useContext(WeatherContext)
  const [isOpen, toggleOpen] = toggleState(false)
  const [text, handleChange] = inputState('')

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={toggleOpen}>
        Change Location
      </Button>
      <Dialog open={isOpen} onClose={toggleOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter a City Name</DialogTitle>
        <form onSubmit={(e)=> {
            e.preventDefault()
            changeCity(text);
            toggleOpen();
        }}>
        <DialogContent>
          
          <TextField
          value={text}
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        </form>
        <DialogActions>
            
          <Button onClick={toggleOpen} color="primary">
            Cancel
          </Button>
          <Button onClick={()=> {
              changeCity(text);
              toggleOpen();
          } } color="primary">
            Change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}