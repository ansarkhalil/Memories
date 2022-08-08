import React from 'react';
import {
  Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import moment from 'moment';
import { MoreHoriz } from '@mui/icons-material';
import styles from './styles';

// eslint-disable-next-line react/prop-types
function Post({ post }) {
  const {
    // eslint-disable-next-line react/prop-types
    title, message, creator, createdAt, tags, selectedFile,
    // eslint-disable-next-line react/destructuring-assignment
  } = post;
  return (
    <Card sx={styles.card}>
      <CardMedia sx={styles.media} image={selectedFile} title={title} />
      <div style={styles.overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div style={styles.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div style={styles.details}>
        {/* eslint-disable-next-line react/prop-types */}
        <Typography variant="body2" color="textSecondary">{tags?.map((tag) => ` #${tag} `)}</Typography>
      </div>
      <CardContent>
        <Typography sx={styles.title} variant="h5" gutterBottom>{message}</Typography>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Button size="small" color="primary" onClick={() => {}} />
      </CardActions>
    </Card>
  );
}

export default Post;
