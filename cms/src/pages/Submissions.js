import React from 'react';
import { Alert, Button, Card, Col, Collapse, Form, FormGroup, FormText, Input, Label, } from 'reactstrap';

import Page from '../components/Page';
import { contactDrHeinrich } from '../App';


class Submissions extends React.Component {

  state = {
    SDICollapseOpen: false,
    SDIICollapseOpen: false
  };

  toggleCollapse1 = () => this.setState({ SDICollapseOpen: !this.state.SDICollapseOpen });
  toggleCollapse2 = () => this.setState({ SDIICollapseOpen: !this.state.SDIICollapseOpen });

  

  render() {
    return <Page title="Submit Documents">

      <p>Please complete the forms below. Only the most recent submission will count towards your grade. Make sure all required items are included with your final submission. If you encounter any issues, please email {contactDrHeinrich()} about the issue you experienced.</p>

      <Alert color="warning" onClick={this.toggleCollapse1}><h5>Senior Design I</h5></Alert>
      <Collapse isOpen={this.state.SDICollapseOpen}>
        <Card body outline color="warning">
          
          <Form>
            <FormGroup row>
              <Label sm={2}>Group Number</Label>
              <Col sm={1}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Project Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Sponsor(s)</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <br />

            <h5>Group Member 1</h5>
            <FormGroup row>
              <Label sm={2}>First Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup> 

            <FormGroup row>
              <Label sm={2}>Last Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Public Email</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Photo</Label>
              <Col sm={5}>
                <Input type="file" />
                <FormText color="muted">maximum size 1MB</FormText>
              </Col>
            </FormGroup>
            
            <h5>Group Member 2</h5>
            <FormGroup row>
              <Label sm={2}>First Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup> 

            <FormGroup row>
              <Label sm={2}>Last Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Public Email</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Photo</Label>
              <Col sm={5}>
                <Input type="file" />
                <FormText color="muted">maximum size 1MB</FormText>
              </Col>
            </FormGroup>

            <h5>Group Member 3</h5>
            <FormGroup row>
              <Label sm={2}>First Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup> 

            <FormGroup row>
              <Label sm={2}>Last Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Public Email</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Photo</Label>
              <Col sm={5}>
                <Input type="file" />
                <FormText color="muted">maximum size 1MB</FormText>
              </Col>
            </FormGroup>
        
          <a href="#">+ add another member</a>

          <br />
          <br />
          <br />


            <FormGroup row>
              <Label sm={3}>Final Design Document (PDF)</Label>
              <Col>
                <Input type="file" name="file" />
                <FormText color="muted">maximum size 20MB</FormText>
              </Col>
            </FormGroup>
          </Form>
          
          <hr />
          <Button color="warning" id="submit-button">Submit</Button>
          
        </Card>
        <br /><br />
      </Collapse>


      <Alert color="warning" onClick={this.toggleCollapse2}><h5>Senior Design II</h5></Alert>
      <Collapse isOpen={this.state.SDIICollapseOpen}>
        <Card body outline color="warning">
          <Form>
            <FormGroup row>
              <Label sm={2}>Group Number</Label>
              <Col sm={1}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Project Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Sponsor(s)</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Initials/Acronym</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
              <FormText color="muted">(for URL, maximum 10 characters)</FormText>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Project Description</Label>
              <Col sm={5}>
                <Input type="textarea" />
              </Col>
              <FormText color="muted">(approximately 200 words)</FormText>
            </FormGroup>

            <FormGroup row>
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
            </FormGroup>

        <br />
        <br />

        <h5>Group Member 1</h5>
            <FormGroup row>
              <Label sm={2}>First Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup> 

            <FormGroup row>
              <Label sm={2}>Last Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Public Email</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Photo</Label>
              <Col sm={5}>
                <Input type="file" />
                <FormText color="muted">maximum size 1MB</FormText>
              </Col>
            </FormGroup>
            
            <h5>Group Member 2</h5>
            <FormGroup row>
              <Label sm={2}>First Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup> 

            <FormGroup row>
              <Label sm={2}>Last Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Public Email</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Photo</Label>
              <Col sm={5}>
                <Input type="file" />
                <FormText color="muted">maximum size 1MB</FormText>
              </Col>
            </FormGroup>

            <h5>Group Member 3</h5>
            <FormGroup row>
              <Label sm={2}>First Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup> 

            <FormGroup row>
              <Label sm={2}>Last Name</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Public Email</Label>
              <Col sm={5}>
                <Input type="text" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Photo</Label>
              <Col sm={5}>
                <Input type="file" />
                <FormText color="muted">maximum size 1MB</FormText>
              </Col>
            </FormGroup>
        
          <a href="#">+ add another member</a>

          <br />
          <br />
          <br />

          <FormGroup row>
            <Label sm={3}>Final Project Document (PDF)</Label>
            <Col>
              <Input type="file" name="file"/>
              <FormText color="muted">maximum size 20MB</FormText>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Project Presentation (PDF/PPTX)</Label>
            <Col>
              <Input type="file" name="file" />
              <FormText color="muted">maximum size 20MB</FormText>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={3}>Conference Paper (PDF)</Label>
            <Col>
              <Input type="file" name="file" />
              <FormText color="muted">maximum size 20MB</FormText>
            </Col>
          </FormGroup>




          






          </Form>

        <hr />
        <Button color="warning" id="submit-button">Submit</Button>
        </Card>
        
      </Collapse>


    </Page>
  }
}

export default Submissions;