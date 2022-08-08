import React from 'react';
import {
  Button, Card, CardMedia, Typography,
} from '@mui/material';
import moment from 'moment';
import { MoreHoriz } from '@mui/icons-material';
import styles from './styles';

function Post(post) {
  const {
    title, message, creator, createdAt,
  } = post;
  return (
    <Card sx={styles.card}>
      <CardMedia sx={styles.media} image={title} title={title} />
      <div style={styles.overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div style={styles.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
          <MoreHoriz />
        </Button>
      </div>

      {message}
    </Card>
  );
}

export default Post;
