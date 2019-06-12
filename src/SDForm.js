import React, { Component } from 'react';
import {
  Row, Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import './SDForm.css';
import logo from'./UCFLogo.png';
import './App.css';
import ReactDOM from 'react-dom';
import { ReactComponent as DragnDrop } from "./dnd.svg";


class SDForm extends Component {
  
  state = {
    items: ["AR Cemetery", "Grave Navigation", "PEAR", " NASA", "Security"],
    other: ["Crypto", "Photo", "Tasks", "Sherlock"]
  };

  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = index => {
    const draggedOverItem = this.state.items[index];

    if (this.draggedItem === draggedOverItem) {
      return;
  }
    let items = this.state.items.filter(item => item !== this.draggedItem);
    items.splice(index, 0, this.draggedItem);
    this.setState({ items });
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  deleteProject = (e) => { 
    this.setState((prevState) => ({
      items: prevState.items.filter(item => item !== e),
    }))
    this.setState(prevState => ({
      other: [...prevState.other, e]
    }))
  };

  addProject = (e) => {
    this.setState((prevState) => ({
      other: prevState.other.filter(item => item !== e),
    }))
    this.setState(prevState => ({
      items: [...prevState.items, e]
    }))
  };
  
  render() {
    return (
      <Container>
        <Col className="UCFLogo"><img src={logo} /></Col> 
        
        <Form className="SDForm">
          <Col>
            <h1 className="mainTitles">Senior Design Project Selection</h1>
          </Col>
          <Row className="form">
            <Col> 
              <FormGroup>
                <Label>First Name</Label>
                <Input type="text" id="firstName" />
              </FormGroup>
            </Col>
            <Col> 
              <FormGroup>
                <Label>Last Name</Label>
                <Input type="text" id="lastName" />
              </FormGroup>
            </Col>
          </Row>

          <Col xs="6">
            <FormGroup>
              <Label>UCF ID</Label>
              <Input type="number" id="UCFID" />
              <FormText className="text-muted">
                7 digit student ID
              </FormText>
            </FormGroup>

            <FormGroup>
              <Label>Knights Email</Label>
              <Input type="email" id="knightsEmail"/>
              <FormText className="text-muted">
                example@knights.ucf.edu
              </FormText>
            </FormGroup>
          </Col>

          <Row className="form">
            <Col> 
              <FormGroup>
                <Label>Overall GPA</Label>
                <Input type="number" id="overallGPA" />
              </FormGroup>
            </Col>
            <Col> 
              <FormGroup>
                <Label>Major GPA</Label>
                <Input type="number" id="majorGPA" />
              </FormGroup>
            </Col>
          </Row>

          <Col xs="6">
            <FormGroup tag="fieldset">
              <Label>Which semester will you be taking Senior Design 2?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="term" id="term" />{' '}
                  Spring
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="term" id="term" />{' '}
                  Summer
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="term" id="term" />{' '}
                  Fall
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>

          <Col xs="9">
            <FormGroup>
              <Label> Area(s) of Interest</Label>
              <Input type="textarea" id="interestArea" />
            </FormGroup>
            <FormGroup>
              <Label> Technical Skills/Strengths</Label>
              <Input type="textarea" id="technicalSkills" />
            </FormGroup>
            <FormGroup>
              <Label> Known Programming Languages</Label>
              <Input type="textarea" id="knownLanguages" />
            </FormGroup>
            <FormGroup>
              <Label> Relevant Work Experience</Label>
              <Input type="textarea" id="workExperience" />
            </FormGroup>
          </Col>


          <Col>
              <h1 className="mainTitles">Project Rankings</h1>
              <h6 className="otherText">Please rank the projects below based on your preference, the top-most being the one you most desperately want to undertake, the one under being your second choice, etc. Any project you do not with to participate in you may delete from the list. You must select at least 10 projects.</h6>
          </Col>

          <Row className="projectList">
            
          <div className="App">
          <Col>
            <main>
              <ul>
                {this.state.items.map((item, idx) => (
                  <li key={item} onDragOver={() => this.onDragOver(idx)}>
                    <div
                      className="drag"
                      draggable
                      onDragStart={e => this.onDragStart(e, idx)}
                      onDragEnd={this.onDragEnd}
                    >
                      <DragnDrop /> 
                    </div> 
                    <span className="content">{item}</span><Button className="otherButton" onClick={() => this.deleteProject(item)}>x</Button>
                  </li>
                ))}
              </ul>
            </main>
            </Col>
            <Col>
            <main>
              <ul>
                {this.state.other.map((item, idx) => (
                  <li key={item} onDragOver={() => this.onDragOver(idx)}>
                    
                    <span className="content">{item}</span><Button className="otherButton" onClick={() => this.addProject(item)}>+</Button>
                  </li>
                ))}
              </ul>
            </main>
            </Col>
          </div>
        </Row>
        
        <Col>
          <FormGroup>
            <Label for="resume">Resume</Label>
            <Input type="file" name="file" id="resume" />
            <FormText className="text-muted">
              Upload your resume
            </FormText>
          </FormGroup>
        </Col>
          

        <Col style={{alignItems: 'center'}}>
          <Button>Submit</Button>
        </Col>
      </Form>
      </Container>
    );
  }
}



export default SDForm;
