import React from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';


import Page from '../components/Page';

class Project extends React.Component {

  state = {
    isLoaded: false,
    projects: []
  }

  componentDidMount() {
    this.fetchWithTimeout('http://10.171.204.211/GetCMSProjects/', {}, 3000)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState( { isLoaded: true, projects: json.project_list, })
      })
      .catch(err => {
        console.log("looks like the backend is being worked on");
      });
  }

  fetchWithTimeout = (url, options, timeout = 3000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout( () => reject(new Error('timeout')), timeout)
      )
    ]);
  }

  render() {
    const {project_id} = this.props.match.params;

    if (this.state.isLoaded) {

      let projectsArray = this.state.projects.filter(project => project.project_id === parseInt(project_id, 10));

      if (projectsArray.length === 1) {
        var project = projectsArray[0];

        return <Page>
          <Row>
            <Col sm={10}>
              <h2 className="mb-4">{project.project_name}</h2>
            </Col>
            <Col sm={2}>
              <h4 id="project-header">{project.term} {project.year}</h4>
            </Col>
             
          </Row>
          
          <br />
          <h3 className="mb-3">Group Members</h3>
          {project.group_members.map(member => {
          return <Row>
            <Col>
              <h5>{member.first_name} {member.last_name}</h5>
            </Col>
            <Col>
              <em>{member.email}</em>
            </Col>
           <Col sm={6}>

           </Col>
            </Row>
          })}
        </Page>
      } 
    }

    return null;  
  }

}

export default Project;