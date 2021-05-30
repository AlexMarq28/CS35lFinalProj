/* ----------------------------------------------------------------------------------------------------*/
/* Ernest (8:40AM, 5/30/2021)
Update: 
HomerUser is a temporary component I've constructed to test out login and signup links in LandingPage.
It inherits nearly all of its code from LoginUser, with the addition of an extra button for 'sign up' and 
a navlink to the signup page.
Still working on it.
*/
/* ----------------------------------------------------------------------------------------------------*/


import React, { Component } from 'react';
import './HomeUser.css';
import { NavLink } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class HomeUser extends Component {
    render() {
        return(
            <Form >
                <FormGroup className="login-form">
                    <Label className="label">Email</Label>
                    <Input type="email" placeholder="joebruin@ucla.edu"/>
                </FormGroup>              
                <FormGroup className="login-form">
                    <Label className="label">Password</Label>
                    <Input type="password" placeholder="********"/>
                </FormGroup> 
                <FormGroup>
                    <Form className="buttonForm" >    
                      <Button className="button"  color="secondary" size="lg">Log in</Button>{' '}
                      <Button className="button"  color="primary" size="lg">Sign up</Button>
                      <NavLink href="/RegisterPage">Create a New Profile</NavLink>
                    </Form>
                </FormGroup>


            </Form>
        );
    }
}

export default HomeUser;




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

const HomeUser = (props) => {
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

export default HomeUser;
*/

