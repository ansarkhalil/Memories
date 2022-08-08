import React, { useState } from 'react';
import {
  Button, Paper, TextField, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/post';

function Forms() {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '',
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {

  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
        />
        <TextField
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          name="title"
          variant="outlined"
          label="title"
          fullWidth
        />
        <TextField
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          name="message"
          variant="outlined"
          label="message"
          fullWidth
        />
        <TextField
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
        />
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>

    </Paper>
  );
}

export default Forms;
