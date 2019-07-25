import React from 'react';
import { Alert, Button, Card, Col, Collapse, Form, FormGroup, FormText, Input, Label, Spinner, Row } from 'reactstrap';
import $ from 'jquery';

import Page from '../components/Page';
import { contactDrHeinrich } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Submissions extends React.Component {

  state = {
    SDICollapseOpen: false,
    SDIICollapseOpen: false,
    projectSD1: null,
    projectSD2: null,
    isLoaded: false,
    projects: [],
    invalidGroupNumberSD1: false,
    invalidGroupNumberSD2: false,
    currentTerm: null,
    currentYear: null,
    designDocProgressBar: null,
    designDocUploadError: false,
    finalDocUploadError: false,
    presentationUploadError: false,
    conferencePaperUploadError: false
  };

  componentDidMount() {
    this.fetchWithTimeout('http://10.171.204.211/GetCMSProjects/', {}, 3000)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState( { isLoaded: true, 
                         projects: json.project_list, 
                         currentYear: json.currentYear,
                         currentTerm: json.currentTerm  })
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

  toggleCollapse1 = () => this.setState({ SDICollapseOpen: !this.state.SDICollapseOpen });
  toggleCollapse2 = () => this.setState({ SDIICollapseOpen: !this.state.SDIICollapseOpen });

  render() {

    let { currentTerm, currentYear } = this.state;

    return <Page title="Submit Documents">

      <p>Please complete the forms below. Only the most recent submission will count towards your grade. Make sure all required items are included with your final submission. If you encounter any issues, please email {contactDrHeinrich()} about the issue you experienced.</p>

      <Alert color="warning" onClick={this.toggleCollapse1}><h5>Senior Design I</h5></Alert>
      <Collapse isOpen={this.state.SDICollapseOpen}>
        <Card body outline color="warning">
  
 
            <Row className="mb-3">
              <Label sm={2}>Group Number</Label>
              <Col sm={1}>
                <Input type="text" onKeyUp={(event) => {
                  if (event.keyCode === 13)
                  {
                    event.preventDefault();
                    if (!isNaN(event.target.value))
                    {
                      let projectsArray = this.state.projects.filter(project => project.group_number === parseInt(event.target.value, 10)
                                                                                && parseInt(project.year, 10)  === currentYear
                                                                                && project.term.toLowerCase() === currentTerm.toLowerCase());

                      if (projectsArray.length === 1) {
                        this.setState({projectSD1: projectsArray[0], invalidGroupNumberSD1: false});
                      }
                      else {
                        this.setState({invalidGroupNumberSD1: true, projectSD1: null});
                      }
                    }
                    else {
                      this.setState({invalidGroupNumberSD1: true, projectSD1: null});
                    }
                  }
                }}/>
              </Col>
              <Col>
              {this.state.projectSD1 ? this.state.projectSD1.project_name : ""}
              {this.state.invalidGroupNumberSD1 ? "give meow meow a valid group number OR ELSE" : ""}
              </Col>
            </Row>

            {this.state.projectSD1 ?
              <Form id="final-design-doc-form">
                <Row className="mb-3">
                  {/*<Input type="text" name="project_id" value={this.state.projectSD1.project_id} hidden />*/}
                  <Label sm={3}>Final Design Document (PDF)</Label>
                  <Spinner color="warning" />
                  <FontAwesomeIcon icon="check" color="green" size="lg" />
                  {this.state.designDocUploadError ?
                    <FontAwesomeIcon icon="times" color="red" size="lg" />
                  :
                    null
                  } 
                  <Col>
                    <Input type="file" name="file" />
                    <FormText color="muted">maximum size 20MB</FormText>
                  </Col>
                  
                </Row>  
              </Form>
              
            :
              null
            }
          

          <hr />
          <Button color="warning" id="submit-button" disabled={!this.state.projectSD1} onClick={() => {
            if (this.state.projectSD1)
            {
              $.ajax({
                // Your server script to process the upload
                url: 'http://10.171.204.211/UploadCMSDesignDoc/?project_id=' + this.state.projectSD1.project_id,
                type: 'POST',

                // Form data
                data: new FormData($('#final-design-doc-form')[0]),

                // Tell jQuery not to process data or worry about content-type
                // You *must* include these options!
                cache: false,
                contentType: false,
                processData: false,

                // Custom XMLHttpRequest
                xhr: function () {
                  var myXhr = $.ajaxSettings.xhr();
                  if (myXhr.upload) {
                    // For handling the progress of the upload
                    myXhr.upload.addEventListener('progress', function (e) {
                      if (e.lengthComputable) {
                        $('progress').attr({
                          value: e.loaded,
                          max: e.total,
                        });
                      }
                    }, false);
                  }
                  return myXhr;
                },

                success: (e) => {

                },
                error: (e) => {
                  this.setState({designDocUploadError: true})
                }
              });
            }
          }}>Submit</Button>
          
        </Card>
        <br /><br />
      </Collapse>


      <Alert color="warning" onClick={this.toggleCollapse2}><h5>Senior Design II</h5></Alert>
      <Collapse isOpen={this.state.SDIICollapseOpen}>
        <Card body outline color="warning">

             <Row className="mb-3">
              <Label sm={2}>Group Number</Label>
              <Col sm={1}>
                <Input type="text" onKeyUp={(event) => {
                  if (event.keyCode === 13)
                  {
                    event.preventDefault();
                    if (!isNaN(event.target.value))
                    {
                      let projectsArray = this.state.projects.filter(project => project.group_number === parseInt(event.target.value, 10)
                                                                                && parseInt(project.year, 10)  === currentYear
                                                                                && project.term.toLowerCase() === currentTerm.toLowerCase());

                      if (projectsArray.length === 1) {
                        this.setState({projectSD2: projectsArray[0], invalidGroupNumberSD2: false});
                      }
                      else {
                        this.setState({invalidGroupNumberSD2: true, projectSD1: null});
                      }
                    }
                    else {
                      this.setState({invalidGroupNumberSD2: true, projectSD2: null});
                    }
                  }
                }}/>
              </Col>
              <Col>
              {this.state.projectSD2 ? this.state.projectSD2.project_name : ""}
              {this.state.invalidGroupNumberSD2 ? "give meow meow a valid group number OR ELSE" : ""}
              </Col>
            </Row>

      

            {this.state.projectSD2 ?

              <>
              <Row className="mb-3">
                <Label sm={2}>Project Description</Label>
                <Col sm={5}>
                  <Input type="textarea" />
                </Col>
                <FormText color="muted">(approximately 200 words)</FormText>
              </Row>

              <Row className="mb-3">
                <Label sm={2}>Keywords</Label>
                <Col sm={5}>
                  <Input type="select" multiple>
                    <option>Artificial Intelligence (AI)</option>
                    <option>Augmented Reality (AR)</option> 
                    <option>Cloud Computing</option> 
                    <option>Computer Vision</option> 
                    <option>Cryptocurrency</option> 
                    <option>Cybersecurity</option> 
                    <option>Drones</option> 
                    <option>Fitness</option>
                    <option>Gaming</option>
                    <option>History</option>
                    <option>Interdisciplinary</option>
                    <option>Machine Learning</option> 
                    <option>Medical</option> 
                    <option>Music</option>
                    <option>Neural Networks</option>  
                    <option>Parallel Computing</option>
                    <option>Quantum Computing</option>
                    <option>Research</option>
                    <option>Robotics</option>
                    <option>Simulation</option>
                    <option>Social</option> 
                    <option>Solar Power</option>                   
                    <option>Sports</option>
                    <option>STEM</option> 
                    <option>UCF</option>
                    <option>Vehicles</option> 
                    <option>Virtual Reality (VR)</option>
                    <option>Voice</option> 
                    <option>Webcourses</option>          
                  </Input>
                </Col>
              </Row>

              <br />
            

              <Form id="final-project-doc-form">
                <Row className="mb-3">
                  {/*<Input type="text" name="project_id" value={this.state.projectSD1.project_id} hidden />*/}
                  <Label sm={3}>Final Project Document (PDF)</Label>
                  <Spinner color="warning" />
                  <FontAwesomeIcon icon="check" color="green" size="lg" />
                  {this.state.finalDocUploadError ?
                    <FontAwesomeIcon icon="times" color="red" size="lg" />
                  :
                    null
                  } 
                  <Col>
                    <Input type="file" name="file" />
                    <FormText color="muted">maximum size 20MB</FormText>
                  </Col>
                  
                </Row>  
              </Form>

              <Form id="presentation-doc-form">
                <Row className="mb-3">
                  {/*<Input type="text" name="project_id" value={this.state.projectSD1.project_id} hidden />*/}
                  <Label sm={3}>Project Presentation (PDF/PPTX)</Label>
                  <Spinner color="warning" />
                  <FontAwesomeIcon icon="check" color="green" size="lg" />
                  {this.state.presentationUploadError ?
                    <FontAwesomeIcon icon="times" color="red" size="lg" />
                  :
                    null
                  } 
                  <Col>
                    <Input type="file" name="file" />
                    <FormText color="muted">maximum size 20MB</FormText>
                  </Col>
                  
                </Row>  
              </Form>

              <Form id="conference-doc-form">
                <Row className="mb-3">
                  {/*<Input type="text" name="project_id" value={this.state.projectSD1.project_id} hidden />*/}
                  <Label sm={3}>Conference Paper (PDF)</Label>
                  <Spinner color="warning" />
                  <FontAwesomeIcon icon="check" color="green" size="lg" />
                  {this.state.conferencePaperUploadError ?
                    <FontAwesomeIcon icon="times" color="red" size="lg" />
                  :
                    null
                  } 
                  <Col>
                    <Input type="file" name="file" />
                    <FormText color="muted">maximum size 20MB</FormText>
                  </Col>
                  
                </Row>  

                <hr />
                <Button color="warning" id="submit-button">Submit</Button>
              </Form>
            </>
            :
              null
            }

          {/**********************************************************************
            <Row className="mb-3">
              <Label sm={2}>Project Description</Label>
              <Col sm={5}>
                <Input type="textarea" />
              </Col>
              <FormText color="muted">(approximately 200 words)</FormText>
            </Row>

            <Row className="mb-3">
              <Label sm={2}>Keywords</Label>
              <Col sm={5}>
                <Input type="select" multiple>
                  <option>Artificial Intelligence (AI)</option>
                  <option>Augmented Reality (AR)</option> 
                  <option>Cloud Computing</option> 
                  <option>Computer Vision</option> 
                  <option>Cryptocurrency</option> 
                  <option>Cybersecurity</option> 
                  <option>Drones</option> 
                  <option>Fitness</option>
                  <option>Gaming</option>
                  <option>History</option>
                  <option>Interdisciplinary</option>
                  <option>Machine Learning</option> 
                  <option>Medical</option> 
                  <option>Music</option>
                  <option>Neural Networks</option>  
                  <option>Parallel Computing</option>
                  <option>Quantum Computing</option>
                  <option>Research</option>
                  <option>Robotics</option>
                  <option>Simulation</option>
                  <option>Social</option> 
                  <option>Solar Power</option>                   
                  <option>Sports</option>
                  <option>STEM</option> 
                  <option>UCF</option>
                  <option>Vehicles</option> 
                  <option>Virtual Reality (VR)</option>
                  <option>Voice</option> 
                  <option>Webcourses</option>          
                </Input>
              </Col>
            </Row>

          <br />

          <Row className="mb-3">
            <Label sm={3}>Final Project Document (PDF)</Label>
            <Col>
              <Input type="file" name="file"/>
              <FormText color="muted">maximum size 20MB</FormText>
            </Col>
          </Row>

          <Row className="mb-3">
            <Label sm={3}>Project Presentation (PDF/PPTX)</Label>
            <Col>
              <Input type="file" name="file" />
              <FormText color="muted">maximum size 20MB</FormText>
            </Col>
          </Row>

          <Row className="mb-3">
            <Label sm={3}>Conference Paper (PDF)</Label>
            <Col>
              <Input type="file" name="file" />
              <FormText color="muted">maximum size 20MB</FormText>
            </Col>
          </Row>


        <hr />
        <Button color="warning" id="submit-button">Submit</Button>

      */}
        </Card>
        
      </Collapse>


    </Page>
  }
}

export default Submissions;