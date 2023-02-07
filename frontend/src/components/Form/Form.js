import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';
import ChipInput from 'material-ui-chip-input';

import { createProject, updateProject } from '../../actions/projects';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId, setModifyProject }) => {
  const [projectData, setProjectData] = useState({ cryptoName: '', ticker: '', contract: '', website: '', concept: '', advantage: '', opinion: '', exchange: '', risk: '', tags: [], selectedFile: '' });

  const project = useSelector((state) => (currentId ? state.projects.projects.find((p) => p._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setProjectData({ cryptoName: '', ticker: '', contract: '', website: '', concept: '', advantage: '', opinion: '', exchange: '', risk: '', tags: [], selectedFile: '' });
  };

  useEffect(() => {
    if (!project?.cryptoName) clear();
    if (project) {
      setProjectData(project);
    }
  }, [project]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createProject({ ...projectData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updateProject(currentId, { ...projectData, name: user?.result?.name }));
      setModifyProject(false);
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Connectez-vous pour présenter vos propres projets.
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setProjectData({ ...projectData, tags: [...projectData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setProjectData({ ...projectData, tags: projectData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6">{currentId ? `Editer "${project?.cryptoName}"` : 'Présenter un projet'}</Typography>
        </div>
        <div className={classes.identities__form}>
          <TextField name="cryptoName" variant="outlined" label="Nom de la cryptomonnaie" fullWidth value={projectData.cryptoName} onChange={(e) => setProjectData({ ...projectData, cryptoName: e.target.value })} />
          <TextField name="ticker" variant="outlined" label="Ticker" fullWidth value={projectData.ticker} onChange={(e) => setProjectData({ ...projectData, ticker: e.target.value })} />
        </div>
        <div className={classes.identities__form}>
          <div className={classes.tags__form} style={{ padding: '5px 7px' }}>
            <ChipInput name="tags" variant="outlined" label="Tags" fullWidth value={projectData.tags} onAdd={(chip) => handleAddChip(chip)} onDelete={(chip) => handleDeleteChip(chip)} />
          </div>
          <div className={classes.risk__form}>
            <TextField style={{ minWidth: 110 }} name="risk" variant="outlined" select label="Risque" value={projectData.risk} onChange={(e) => setProjectData({ ...projectData, risk: e.target.value })}>
              <MenuItem value={'1'}>1</MenuItem>
              <MenuItem value={'2'}>2</MenuItem>
              <MenuItem value={'3'}>3</MenuItem>
              <MenuItem value={'4'}>4</MenuItem>
              <MenuItem value={'5'}>5</MenuItem>
              <MenuItem value={'6'}>6</MenuItem>
              <MenuItem value={'7'}>7</MenuItem>
              <MenuItem value={'8'}>8</MenuItem>
              <MenuItem value={'9'}>9</MenuItem>
              <MenuItem value={'10'}>10</MenuItem>
            </TextField>
          </div>
        </div>
        <div className={classes.identities__form}>
          <div className={classes.website__form}>
            <TextField name="website" variant="outlined" label="Site internet" fullWidth value={projectData.website} onChange={(e) => setProjectData({ ...projectData, website: e.target.value })} />
          </div>
          <div className={classes.exchange__form}>
            <TextField style={{ maxWidth: 110 }} name="exchange" variant="outlined" select label="Exchange" value={projectData.exchange} fullWidth onChange={(e) => setProjectData({ ...projectData, exchange: e.target.value })}>
              <MenuItem value={'UniSwap'}>UniSwap</MenuItem>
              <MenuItem value={'PancakeSwap'}>PancakeSwap</MenuItem>
              <MenuItem value={'QuickSwap'}>QuickSwap</MenuItem>
              <MenuItem value={'SpookySwap'}>SpookySwap</MenuItem>
              <MenuItem value={'TraderJoe'}>TraderJoe</MenuItem>
              <MenuItem value={'Autre'}>Autre</MenuItem>
            </TextField>
          </div>
        </div>

        <TextField name="contract" variant="outlined" label="Adresse du contrat" fullWidth value={projectData.contract} onChange={(e) => setProjectData({ ...projectData, contract: e.target.value })} />
        <TextField name="concept" variant="outlined" label="Concept" fullWidth multiline minRows={4} value={projectData.concept} onChange={(e) => setProjectData({ ...projectData, concept: e.target.value })} />
        <TextField name="advantage" variant="outlined" label="Avantage(s)" fullWidth multiline minRows={4} value={projectData.advantage} onChange={(e) => setProjectData({ ...projectData, advantage: e.target.value })} />
        <TextField name="opinion" variant="outlined" label="Avis Perso" fullWidth multiline minRows={4} value={projectData.opinion} onChange={(e) => setProjectData({ ...projectData, opinion: e.target.value })} />

        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setProjectData({ ...projectData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Publier
        </Button>
        <Button variant="contained" size="small" onClick={clear} fullWidth>
          Vider le formulaire
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
