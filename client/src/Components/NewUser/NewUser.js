/* ----------------------------------------------------------------------------------------------------*/
/* Ernest (1:30PM 5/29/2021)
Description:
NewUser has been updated with a better implementation of the text fields.
*/

import React, { Component } from 'react';
import './NewUser.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewUser extends Component {
    render() {
        return(
            <Form>
                <FormGroup className="login-form">
                    <Label className="label">Name</Label>
                    <Input type="name" placeholder="Joe Bruin"/>
                </FormGroup>
                <FormGroup className="login-form">
                    <Label className="label">Username</Label>
                    <Input type="username" placeholder="joebruin2021"/>
                </FormGroup>
                <FormGroup className="login-form">
                    <Label className="label">Email</Label>
                    <Input type="email" placeholder="joebruin@ucla.edu"/>
                </FormGroup>              
                <FormGroup className="login-form">
                    <Label className="label">Password</Label>
                    <Input type="password" placeholder="********"/>
                </FormGroup> 
                <Form className="buttonForm">
                <Button className="button" color="secondary" size="lg">
                    Sign up
                </Button>
                </Form>

            </Form>
        );
    }
}

export default NewUser;

/* ----------------------------------------------------------------------------------------------------*/
/* Ernest (4:00PM 5/28/2021)
Description:
The following code is reserved for exclusive use in 'RegisterPage'.
It returns text-fields for the user to enter their email, username, and password.
It has not yet been configured to do anything else but output the text-fields and a button.
Implementation will come later.
*/
/* ----------------------------------------------------------------------------------------------------*/

/*
import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NewUser = (props) => {
  return (
    <Container>
      <Row style={{padding: '10px'}}>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Form>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="joebruin@ucla.edu" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row style={{padding: '10px'}}>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Form>
            <FormGroup>
              <Label for="Username">Username</Label>
              <Input type="username" name="username" id="username" placeholder="Joe Bruin" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row style={{padding: '10px'}}>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Form>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="********" />
            </FormGroup>
          </Form>
        </Col>
      </Row >
      <Row style={{padding: '10px'}}>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Button>Create Account</Button>
        </Col>
      </Row >
    </Container>
  );
}

export default NewUser;
*/