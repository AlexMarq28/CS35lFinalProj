/* Ernest (4:00PM 5/28/2021)
Description:
The following code is reserved for exclusive use in 'RegisterPage'.
It returns text-fields for the user to enter their email, username, and password.
It has not yet been configured to do anything else but output the text-fields and a button.
Implementation will come later.

*/
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
