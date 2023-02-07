import React, { useState, useRef } from 'react';
import { Typography, TextField, Button, Snackbar } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';

import { commentProject } from '../../actions/projects';
import useStyles from './styles';

const ProjectComments = ({ project }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(project?.comments);
  const [openStatus, setOpenStatus] = useState(false);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleClick = () => {
      setOpenStatus(true);
  };

  const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
      return;
    }
      setOpenStatus(false);
  };

  const handleComment = async () => {
    if (!user || user === null) {
      handleClick();
    } else {
      const newComments = await dispatch(commentProject(`${user?.result?.name}: ${comment}`, project._id));
      setComment('');
      setComments(newComments);
      commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">Commentaires</Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(': ')[0]}</strong>
              {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        <div style={{ width: '70%' }}>
          <Typography gutterBottom variant="h6">Ecrire un commentaire</Typography>
          <TextField fullWidth rows={4} variant="outlined" label="Commentaire" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
            Ajouter un commentaire
          </Button>
          <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={openStatus}
          autoHideDuration={6000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Veuillez vous authentifier pour commenter ce projet</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={handleClose}>
              J'ai Compris
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        </div>
      </div>
    </div>
  );
};

export default ProjectComments;
