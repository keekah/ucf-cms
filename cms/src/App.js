import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faEnvelope, faGlobe, faPhoneAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Outline from './pages/Outline';
import Sponsors from './pages/Sponsors';
import Students from './pages/Students';
import Contact from './pages/Contact';
import Submissions from './pages/Submissions';

library.add(fab, faBuilding, faEnvelope, faGlobe, faPhoneAlt, faSearch);


export const contactDrHeinrich = () => <Link to="/contact#heinrich">Dr. Mark Heinrich</Link>;
export const contactDrLeinecker = () => <Link to="/contact#leinecker">Dr. Richard Leinecker</Link>;
export const projectProposalForm = () => <a href="../ProjectDescription.docx">Project Proposal/Description form</a>;

class App extends React.Component {
  render () {
    return (
      <Router>
          
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/outline" component={Outline} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/students" component={Students} />
          <Route path="/contact" component={Contact} />
          <Route path="/submissions" component={Submissions} />

      </Router>
    );
  }
}



export default App;
