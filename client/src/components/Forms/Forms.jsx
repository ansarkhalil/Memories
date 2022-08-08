import React from 'react';
import { Paper, TextField, Typography } from '@mui/material';

function Forms() {
  const handleSubmit = () => {

  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth />
      </form>

    </Paper>
  );
}

export default Forms;
