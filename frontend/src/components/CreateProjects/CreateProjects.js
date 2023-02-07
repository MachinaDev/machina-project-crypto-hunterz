import React, { useState } from 'react';
import Form from '../Form/Form';

import useStyles from './styles';

const CreateProjects = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
};

export default CreateProjects;
