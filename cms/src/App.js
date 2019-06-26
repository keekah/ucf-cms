import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './pages/About';
import Projects from './pages/Projects';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';

class App extends React.Component {

  render () {
    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Poopy} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/contact" component={Contact} />

        </div>
      </Router>
    );
  }

}

const Poopy = () => {
  return (
    <h1>hello</h1>
  );
};


export default App;
