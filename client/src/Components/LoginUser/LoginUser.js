/* Ernest (1:30PM 5/29/2021)
Description:
LoginUser.js has the same implementation as NewUser.js, but with fewer text-fields, as a continuing user only needs
to enter his email and password to log in.
*/


import React, { Component } from 'react';
import './LoginUser.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class loginUser extends Component {
    render() {
        return(
            <Form>
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
                    Log in
                </Button>
                </Form>

            </Form>
        );
    }
}

export default loginUser;




/* Ernest (8:05PM 5/28/2021)
Description:
The following code is reserved for exclusive use in 'LoginPage'.
It returns text-fields for the returning users to enter their email and password to log in.
It has not yet been configured to do anything else but output the text-fields and a button.
Implementation will come later.

*/
/*
import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const LoginUser = (props) => {
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
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="********" />
            </FormGroup>
          </Form>
        </Col>
      </Row >
      <Row style={{padding: '20px'}}>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Button color="primary" size="lg">Log in</Button>
        </Col>
      </Row >
    </Container>
  );
}

export default LoginUser;
*/

