import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';

library.add(faSearch);


class App extends React.Component {

  render () {
    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/contact" component={Contact} />

        </div>
      </Router>
    );
  }

}



export default App;
