import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import SDForm from './SDForm';
import AdminApp from './AdminApp';
import FormSubmitted from './FormSubmitted';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Login</Link></li>
            <li><Link to={'/sdform'} className="nav-link">SDForm</Link></li>
            <li><Link to={'/AdminApp'} className="nav-link">AdminDashboard</Link></li>
            <li><Link to={'/FormSubmitted'} className="nav-link">FormSubmitted</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={LoginPage} />
              <Route path='/sdForm' component={SDForm} />
              <Route path='/AdminApp' component={AdminApp} />
              <Route path='/FormSubmitted' component={FormSubmitted} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;