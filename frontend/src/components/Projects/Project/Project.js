import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import moment from 'moment';

import { likeProject, deleteProject } from '../../../actions/projects';
import useStyles from './styles';

const Project = ({ project, setCurrentId, setModifyProject }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(project?.likes);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userId = user?.result.googleId || user?.result?._id;

  const hasLikedProject = project.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likeProject(project._id));

    if (hasLikedProject) {
      setLikes(project.likes.filter((id) => id !== userId));
    } else {
      setLikes([...project.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <Star fontSize="small" />
          &nbsp;{likes.length > 2 ? `Vous et ${likes.length - 1} autres` : `${likes.length} étoile${likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <Star fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? 'Etoile' : 'Etoiles'}
        </>
      );
    }

    return (
      <>
        <StarBorder fontSize="small" />
        &nbsp;Aucune Etoile
      </>
    );
  };

  const openProject = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/projects/${project._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase component="span" name="test" className={classes.cardAction} onClick={openProject}>
        <CardMedia className={classes.media} image={project.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={project.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{project.name}</Typography>
          <Typography variant="body2">{moment(project.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === project?.creator || user?.result?._id === project?.creator) && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(project._id);
                setModifyProject(true);
              }}
              style={{ color: 'white' }}
              size="small">
              <MoreHorizIcon fontSize="medium" />
            </Button>
          </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {project.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {/* {project.title} */}
          {project.cryptoName}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.concept.split(' ').splice(0, 20).join(' ')}...
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.googleId === project?.creator || user?.result?._id === project?.creator) && (
          <Button className={classes.delete__button} size="small" onClick={() => dispatch(deleteProject(project._id))}>
            <DeleteIcon className={classes.delete__icons} fontSize="small" /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Project;
