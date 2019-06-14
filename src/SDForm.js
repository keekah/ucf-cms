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
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      knightsEmail: "",
      UCFID: "",
      overallGPA: "",
      majorGPA: "",
      term: "",
      interestArea: "",
      technicalSkills: "",
      knownLanguages: "",
      workExperience: "",
      items: [],
      other: ["AR Cemetery", "Grave Navigation", "PEAR", " NASA", "Security", "Crypto", "Photo", "Tasks", "Sherlock"]
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state;

    fetch("http://10.171.204.211/users/?format=api", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }


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

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  printToConsole = () => {
    console.log(this.state)
  }
  
  render() {
    return (
      <Container>
        <Col className="UCFLogo"><img src={logo} /></Col> 
        
        <Form className="SDForm" onSubmit={this.handleFormSubmit}>
          <Col>
            <h1 className="mainTitles">Senior Design Project Selection</h1>
          </Col>
          <Row className="form">
            <Col> 
              <FormGroup>
                <Label>First Name</Label>
                <Input type="text" id="firstName" onChange={this.handleChange.bind(this)} value={this.state.firstName}/>
              </FormGroup>
            </Col>
            <Col> 
              <FormGroup>
                <Label>Last Name</Label>
                <Input type="text" id="lastName" onChange={this.handleChange.bind(this)} value={this.state.lastName} />
              </FormGroup>
            </Col>
          </Row>

          <Col xs="6">
            <FormGroup>
              <Label>UCF ID</Label>
              <Input type="number" id="UCFID" onChange={this.handleChange.bind(this)} value={this.state.UCFID} />
              <FormText className="text-muted">
                7 digit student ID
              </FormText>
            </FormGroup>

            <FormGroup>
              <Label>Knights Email</Label>
              <Input type="email" id="knightsEmail" onChange={this.handleChange.bind(this)} value={this.state.knightsEmail} />
              <FormText className="text-muted">
                example@knights.ucf.edu
              </FormText>
            </FormGroup>
          </Col>

          <Row className="form">
            <Col> 
              <FormGroup>
                <Label>Overall GPA</Label>
                <Input type="number" id="overallGPA" onChange={this.handleChange.bind(this)} value={this.state.overallGPA} />
              </FormGroup>
            </Col>
            <Col> 
              <FormGroup>
                <Label>Major GPA</Label>
                <Input type="number" id="majorGPA" onChange={this.handleChange.bind(this)} value={this.state.majorGPA} />
              </FormGroup>
            </Col>
          </Row>

          <Col xs="6">
            <FormGroup tag="fieldset">
              <Label>Which semester will you be taking Senior Design 2?</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="term" id="term" onChange={this.handleChange.bind(this)} value={this.state.term} />{' '}
                  Spring
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="term" id="term" onChange={this.handleChange.bind(this)} value={this.state.term} />{' '}
                  Summer
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="term" id="term" onChange={this.handleChange.bind(this)} value={this.state.term} />{' '}
                  Fall
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>

          <Col xs="9">
            <FormGroup>
              <Label> Area(s) of Interest</Label>
              <Input type="textarea" id="interestArea" onChange={this.handleChange.bind(this)} value={this.state.interestArea} />
            </FormGroup>
            <FormGroup>
              <Label> Technical Skills/Strengths</Label>
              <Input type="textarea" id="technicalSkills" onChange={this.handleChange.bind(this)} value={this.state.technicalSkills} />
            </FormGroup>
            <FormGroup>
              <Label> Known Programming Languages</Label>
              <Input type="textarea" id="knownLanguages" onChange={this.handleChange.bind(this)} value={this.state.knownLanguages} />
            </FormGroup>
            <FormGroup>
              <Label> Relevant Work Experience</Label>
              <Input type="textarea" id="workExperience" onChange={this.handleChange.bind(this)} value={this.state.workExperience} />
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
          <Button onClick={this.printToConsole}>Submit</Button>
        </Col>
      </Form>
      </Container>
    );
  }
}



export default SDForm;
