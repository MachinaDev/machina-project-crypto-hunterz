import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { Paper, Typography, CircularProgress, Divider, Chip, Button } from '@material-ui/core/';
import LinkIcon from '@material-ui/icons/Link';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { getProject, getProjectsBySearch } from '../../actions/projects';
import ProjectComments from './ProjectComments';
import useStyles from './styles';

const Project = () => {
  const { project, projects, isLoading } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProject(id));
  }, [id]);

  useEffect(() => {
    if (project) {
      dispatch(getProjectsBySearch({ search: 'none', tags: project?.tags.join(',') }));
    }
  }, [project]);

  if (!project) return null;

  const openProject = (_id) => history.push(`/projects/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const RiskLevel = (project) => {
    if (project.risk <= 4) {
      return <Chip style={{ marginLeft: '1em', marginTop: '-0.5em', color: 'white', backgroundColor: '#c80c81'}}  label='Projet peu risqué'/>
    } else if (project.risk > 4 && project.risk <= 7) {
        return <Chip style={{ marginLeft: '1em', marginTop: '-0.5em', color: 'black', backgroundColor: '#f0d90a'}}  label='Projet assez risqué'/>
    } else {
        return <Chip style={{ marginLeft: '1em', marginTop: '-0.5em', color: 'white', backgroundColor: '#e90606'}}  label='Projet très risqué'/>
      }
  }

  const recommendedProjects = projects.filter(({ _id }) => _id !== project._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{project.cryptoName}</Typography>
          <div className={classes.header__container}>
            <div className={classes.header__left__container}>
            <Typography gutterBottom variant="h6" component="h2">{project.tags.map((tag) => (
            <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#c80c81' }}>
              {` #${tag} `}
            </Link>
            ))}
            </Typography>
            <Typography variant="h6">
              Created by:
              <Link to={`/creators/${project.name}`} style={{ textDecoration: 'none', color: '#c80c81' }}>
                {` ${project.name}`}
              </Link>
              </Typography>
            <Typography variant="body1">{moment(project.createdAt).fromNow()}</Typography>
          </div>
            <div className={classes.header__right__container}>
              <div className={classes.header__right__container__first}>
                <div style={{ display: 'flex',  alignItems: 'center' }} >
                  <Typography style={{ fontWeight: 'bold' }}  variant="body1" component="p">Ticker</Typography>
                  <Chip style={{ marginLeft: '1em',  color: 'white', backgroundColor: '#c80c81'}}  label={project.ticker} />
                </div>
                <Divider style={{ margin: '20px 0' }} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography style={{ fontWeight: 'bold' }}  variant="body1" component="p">Risque:</Typography>
                  <Typography style={{ marginLeft: '1em' }} variant="body1" component="p">{project.risk}</Typography>
                  <RiskLevel/>
                </div>
              </div>
                  <Divider style={{ margin: '20px 0' }} />
              <div className={classes.header__right__container__second}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography style={{ fontWeight: 'bold' }}  variant="body1" component="p">Exchange:</Typography>
                  <Typography style={{ marginLeft: '1em' }} variant="body1" component="p">{project.exchange}</Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography style={{ fontWeight: 'bold' }} variant="body1" component="p">Adresse du contrat:</Typography>
                  <Typography  style={{ marginLeft: '1em' }} variant="body1" component="p">{project.contract}</Typography>
                  <Button target="_blank" href={`https://etherscan.io/token/${project.contract}`}><LinkIcon/></Button>
                </div>
              </div>
            </div>
          </div>
          <Divider style={{ margin: '20px 0' }} />
          <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="body1" component="p">Concept du projet</Typography>
          <Typography gutterBottom variant="body1" component="p">{project.concept}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="body1" component="p">Avantage du projet:</Typography>
          <Typography gutterBottom variant="body1" component="p">{project.advantage}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography style={{ fontWeight: 'bold' }} gutterBottom variant="body1" component="p">Avis Perso:</Typography>
          <Typography gutterBottom variant="body1" component="p">{project.opinion}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Le chat en temps réel arrive bientôt ! Stay tuned !</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <ProjectComments project={project} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={project.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={project.title} />
        </div>
      </div>
      {!!recommendedProjects.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">Ces projets peuvent aussi vous intéresser:</Typography>
          <Divider />
          <div className={classes.recommendedProjects}>
            {recommendedProjects.map(({ title, cryptoName, concept, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openProject(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{cryptoName}</Typography>
                <Typography gutterBottom variant="subtitle2">{concept}</Typography>
                <Typography gutterBottom variant="subtitle1">Votes: {likes.length}</Typography>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Project;
