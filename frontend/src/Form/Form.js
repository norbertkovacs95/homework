import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './Form.css'

export default function Form(props) {

  const [ formState, setFormState] = useState({pages: 0, disabled:true});
  const { handler } = props;
  
  const handleSubmit = (e) => {
    handler(formState.pages);
    e.preventDefault();
  }

  const handleChange = (e) => {
    let pages = e.target.value;
    setFormState({
      pages: pages, disabled: !(pages > 0)
    });
  }

  return (
    <div onSubmit={ handleSubmit }>
      <h2 className="label">Parse each tag from each blog on risingstack.blog</h2>
      <form className="formContainer">
        <TextField 
          size="medium"
          label="Number of pages" 
          type="number" 
          inputProps = { { min: 0} }
          onChange={ handleChange }
        />
        <Button 
          variant="contained" 
          color="primary"
          disabled={ formState.disabled }
          type="submit">
            Scrape Pages
        </Button>
      </form>
    </div>
  );
}