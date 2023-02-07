import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getProjectsByCreator, getProjectsBySearch } from '../../actions/projects';
import Project from '../Projects/Project/Project';

const CreatorOrTag = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { projects, isLoading } = useSelector((state) => state.projects);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/tags')) {
      dispatch(getProjectsBySearch({ tags: name }));
    } else {
      dispatch(getProjectsByCreator(name));
    }
  }, []);

  if (!projects.length && !isLoading) return 'Pas de projets';

  return (
    <div>
      <Typography variant="h2">{name}</Typography>
      <Divider style={{ margin: '20px 0 50px 0' }} />
      {isLoading ? <CircularProgress /> : (
        <Grid container alignItems="stretch" spacing={3}>
          {projects?.map((project) => (
            <Grid key={project._id} item xs={12} sm={12} md={6} lg={3}>
              <Project project={project} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CreatorOrTag;
