import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import ProjectsList from './components/ProjectsList/ProjectsList';
import CreateProjects from './components/CreateProjects/CreateProjects';
import ProjectDetails from './components/ProjectsDetails/ProjectDetails';
import Faq from './components/Faq/Faq';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import LandingPage from './components/LandingPage/LandingPage';
import Page404 from './components/Page404/Page404';
import VerifiedEmail from './components/VerifiedEmail/VerifiedEmail';
import EmailToVerify from './components/EmailToVerify/EmailToVerify';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/projects" exact component={ProjectsList} />
          <Route path="/create-projects" exact component={CreateProjects} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/projects/search" exact component={ProjectsList} />
          <Route path="/projects/:id" exact component={ProjectDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user || user === null ? <Auth /> : <Redirect to="/projects" />)} />
          <Route path="/verified-email" exact component={VerifiedEmail} />
          <Route path="/verify-your-email" exact component={EmailToVerify} />
          <Route component={Page404} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
