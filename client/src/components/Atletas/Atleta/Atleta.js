import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likeAtleta, deleteAtleta } from '../../../actions/atletas';
import useStyles from './styles';

const Atleta = ({ atleta, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      
      <CardMedia 
        className={classes.media} 
        image={atleta.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
        title={atleta.title} 
      />
      
      <div className={classes.overlay}>
        <Typography variant="h6">{atleta.nome}</Typography>
        <Typography variant="body2">{moment(atleta.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(atleta._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{atleta.tags.map((tag) => `#${tag} `)}</Typography>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{atleta.time}</Typography>
      </div>

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{atleta.nome}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{atleta.rh}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" 
                onClick={() => dispatch(likeAtleta(atleta._id))}>
                  <ThumbUpAltIcon fontSize="small" /> Like {atleta.likeCount} 
        </Button>
        <Button size="small" color="primary" 
                onClick={() => dispatch(deleteAtleta(atleta._id))}>
                  <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Atleta;
