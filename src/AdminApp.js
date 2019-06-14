import React, { Component } from 'react';
import {
  Row, Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import './SDForm.css';
import logo from'./UCFLogo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import NewTerm from './NewTerm';
import TermView from './TermView';
import Students from './Students';
import Schedule from './Schedule';

class AdminApp extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Col className="UCFLogo">
            <img src={logo} />
          </Col>
          <Form className="adminBar">
            <div>
              <nav  className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Dashboard</Link></li>
            <li><Link to={'/newterm'} className="nav-link">Add Project</Link></li>
            <li><Link to={'/viewterms'} className="nav-link">View Projects</Link></li>
            <li><Link to={'/students'} className="nav-link">Students</Link></li>
            <li><Link to={'/schedule'} className="nav-link">Schedule</Link></li>
            </ul>
            </nav>
            <hr />
          <Switch>
              <Route exact path='/' component={AdminDashboard} />
              <Route path='/newterm' component={NewTerm} />
              <Route path='/viewterms' component={TermView} />
              <Route path='/students' component={Students} />
              <Route path='/schedule' component={Schedule} />
          </Switch>     
            </div>
          </Form>
      </Router>
      </Container>
    );
  }
}

export default AdminApp;