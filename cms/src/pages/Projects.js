import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Button, Form, Input } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Page from '../components/Page';


class Projects extends React.Component {

  state = { 
    isLoaded: false,
    projects: [],
  }

  componentDidMount(){
    fetch('http://10.171.204.211/projects/')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState( { isLoaded: true, projects: json.results, })
      })
      .catch(err => {
        console.log("looks like the backend is being worked on");
        this.setState({ isLoaded: true, projects: [
          { ProjectName: "Poopy1", Term: "Spring", Year:"1996" },
          { ProjectName: "Bernie", Term: "Fall", Year: "2020" },
          { ProjectName: "Remus' Big Adventure", Term: "Fall", Year: "2019"}
        ] });
      });
  }

  render() {

    let { isLoaded, projects } = this.state;

    let projectList = <></>;

    let createRowForProject = (project, index) => 
      <Row key={index}>
        <Col>
          {project.ProjectName}
        </Col>
        <Col>
          {project.Term} {project.Year}
        </Col>
      </Row>;

    if (isLoaded) {
      projectList = (
        <Container>
          {projects.map(createRowForProject)}
        </Container>
      );
    }

    return <>
      <Page>
        <Row>
          <h2>Projects</h2> 
          <Form className="ml-auto" inline>
            <Input name="search" placeholder="Search Projects"></Input>
            <Button id="project-search-button">
              <FontAwesomeIcon icon="search" />
            </Button>
          </Form>
        </Row>
     
        {projectList}
        
      </Page>
    </>
  }
}

export default Projects;