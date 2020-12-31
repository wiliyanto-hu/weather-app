import React,{useContext, useEffect} from 'react';
import {WeatherContext} from './context/weatherContext.jsx'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import toggleState from './hooks/toggleState.jsx'
import inputState from './hooks/inputState.jsx'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


export default function FormDialog() {
    const {changeCity} = useContext(WeatherContext)
  const [isOpen, toggleOpen] = toggleState(false)
  const [text, handleChange] = inputState('')



  return (
    <div>
      <Button variant="contained" color="secondary" onClick={toggleOpen} style={{marginTop: '2rem'}}>
        Change Location
      </Button>
      <Dialog open={isOpen} onClose={toggleOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter a City Name</DialogTitle>
        <ValidatorForm onSubmit={(e)=> {
            e.preventDefault()
            changeCity(text);
            toggleOpen();
        }} instantValidate={false} >
        <DialogContent>
          
          <TextValidator
          value={text}
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            fullWidth
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen} color="primary">
            Cancel
          </Button>
          <Button
           color="primary" type='submit'>
            Change
          </Button>
         
        </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}