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
import "./App.css"

class NewTerm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Sponsor: "",
      Sponsor2: "",
      ProjectName: "",
      Year: "",
      Term: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <Container>
        <Form>
          <Col  className="SDForm">
            <h1 className="mainTitles">Add Project</h1>
          </Col>

          <Col>
            <FormGroup>
              <Label>Project Name</Label>
              <Input type="text" id="ProjectName" onChange={this.handleChange.bind(this)} value={this.state.ProjectName} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Sponsor 1</Label>
              <Input type="text" id="Sponsor" onChange={this.handleChange.bind(this)} value={this.state.Sponsor} />
            </FormGroup>
            <FormGroup>
              <Label>Sponsor 2</Label>
              <Input type="text" id="Sponsor2" onChange={this.handleChange.bind(this)} value={this.state.Sponsor2} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Year</Label>
              <Input type="number" id="Year" onChange={this.handleChange.bind(this)} value={this.state.Year} />
            </FormGroup>
          </Col>
          <Col xs="6">
            <FormGroup tag="fieldset">
              <Label>Term</Label>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="Term" id="Term" onChange={this.handleChange.bind(this)} value={this.state.Term} />{' '}
                  Spring
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="term" id="term" onChange={this.handleChange.bind(this)} value={this.state.Term} />{' '}
                  Summer
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="term" id="term" onChange={this.handleChange.bind(this)} value={this.state.Term} />{' '}
                  Fall
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>

          <Col>
            <Button>Add</Button>
          </Col>
          
        </Form>
      </Container>
    );
  }
}

export default NewTerm;