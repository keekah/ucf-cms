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

class FormSubmitted extends Component {

  render() {
    return (
      <Container>
        <Col className="UCFLogo"><img src={logo} /></Col>
        <Form>
          <Col  className="SDForm">
            <h1 className="mainTitles">Form Submitted!</h1>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default FormSubmitted;