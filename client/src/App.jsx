import React, { useEffect } from 'react';
import {
  AppBar, Container, Grid, Grow, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Forms from './components/Forms/Forms';
import { getPosts } from './actions/post';
import styles from './styles';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar
        sx={styles.appBar}
        position="static"
        color="inherit"
      >
        <Typography
          sx={styles.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          sx={styles.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyItems="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />

            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms />
            </Grid>
          </Grid>
        </Container>

      </Grow>

    </Container>
  );
}

export default App;
