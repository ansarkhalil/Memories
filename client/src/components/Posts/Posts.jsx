import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';
import styles from './styles';
import Post from './Post/Post';

function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid sx={styles.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          // eslint-disable-next-line no-underscore-dangle
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;
