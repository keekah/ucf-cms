import React, { Component } from "react";
import {
  Row,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  FormFeedback
} from "reactstrap";
import "./SDForm.css";
import logo from "./UCFLogo.png";
import "./index.css"

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [{email: "", password: ""}],
      stuText: ""
    }
    this.genPass = this.genPass.bind(this);
    this.addPass = this.addPass.bind(this);
    this.printToConsole = this.printToConsole.bind(this);
    this.handleEmails = this.handleEmails.bind(this);
  }

  handleEmails = () => {
    var students = this.state.stuText;
    var ar = students.split(' '); 
    this.addPass(ar);
  };
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  printToConsole = () => {
    console.log("hi")
  }

  addPass = (arr) => {
    const temp = [];
    

    for (let i = 0; i < arr.length; i++) {
        temp.push({
            email: arr[i],
            password: this.genPass()
        });
    }
    this.state.students = { temp };
    console.log( temp);
    //this.printToConsole()
  };

  genPass = () => {
    var generator = require('generate-password');
  
    var password = generator.generate({
    length: 10,
    numbers: true,
    uppercase: true
    });
    return password;
  }

  render() {
    return (
      <Container>

        <Form>
          <Col  className="SDForm">
            <h1 className="mainTitles">Students</h1>
          </Col>
          <Col> 
              <FormGroup>
                <Label>Student Emails to Generate Passwords</Label>
                <Input type="text" id="stuText" onChange={this.handleChange.bind(this)} value={this.state.stuText}/>
              </FormGroup>
              <Button onClick={this.handleEmails}>Generate</Button>

              
            </Col>
        </Form>
      </Container>
    );
  }
}

export default Students;