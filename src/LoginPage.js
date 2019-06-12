import React, { Component } from 'react';
import {
  Row, Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import './SDForm.css';
import logo from'./UCFLogo.png';
import { Link } from 'react-router';


class LoginPage extends Component {
  constructor(props) {
    super(props);
      this.state = {
      'nid': '',
      'userPassword': '',
      validate: {
        nidState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateNID(e) {
    const { validate } = this.state;
    if (e.length === 8) {
      validate.nidState = 'isSuccessful'
    } else {
      validate.nidState = 'notSuccessful'
    }
    this.setState({ validate })
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  loginAction(e) {
    e.preventDefault();
    console.log(`NID: ${ this.state.nid }`)
  }

  render() {
    const { nid, userPassword } = this.state;
    return (
     <Container>
        <Col className="UCFLogo"><img src={logo} /></Col>
        <Form className="SDForm">
          <Col>
            <h1 className="mainTitles">Senior Design Project Selection</h1>
            <h3 className="subTitle">Sign In</h3>
          </Col>

          <Col>
          <FormGroup>
              <Label>NID</Label>
              <Input type="text" name="nid" id="nid" 
                value={ nid }
                valid={ this.state.validate.nidState === 'isSuccessful' }
                invalid={ this.state.validate.nidState === 'notSuccessful' }
                onChange={ (e) => {
                            this.validateNID(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback valid>
                Valid!
              </FormFeedback>
              <FormFeedback>
                NID has two letters and six numbers
              </FormFeedback>
            </FormGroup>
          </Col>
          
          <Col>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="userPassword" id="userPassword"
                value={ userPassword }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>

          <Button className="subTitle">Submit</Button>

        </Form>
      </Container>

    );
  }
}

export default LoginPage;