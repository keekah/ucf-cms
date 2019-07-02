import React from 'react';
import { Container, Jumbotron, Row } from 'reactstrap';

import Page from '../components/Page';

class Project extends React.Component {

  render() {
    return <Page>
      <Row>
      <h2 className="mb-4">{this.props.project.ProjectName}</h2> 
      <h5 id="groupMembers" className="mb-4 ml-auto">{this.props.project.GroupMembers}</h5> 
      </Row>
      <Jumbotron fluid>
       <Container fluid>
         <p>
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
         </p>
         <h1 className="text-center">PDF Viewer Here</h1>
         <p>
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
         </p>
       </Container>
     </Jumbotron>
    </Page>
  }

}

export default Project;