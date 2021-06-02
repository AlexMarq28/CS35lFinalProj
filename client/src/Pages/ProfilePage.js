import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText} from 'reactstrap';
import classnames from 'classnames';

import "./ProfilePage.css";
import { Button, Table, Container, Row, Col } from 'reactstrap';

import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";

export default function ProfilePage() {
  //Ernest's edit
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  // -----------------
  // grab current state
  const state = store.getState();
  const isAuthenticated = state.auth.isAuthenticated;
  return (
    <Provider store={store}>
      <div className="profilePage">
      <AppNavbar />
      <div className="font-link3">
        <h1 className="welcomeMessage" >
          WELCOME, TESTNAME
        </h1>
        <Row>
            <Col xs="3" ></Col>
            <Col>
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { toggle('1'); }}
                      style={{cursor:"pointer", color: "#fffff0", backgroundColor: "#D6D6D7"}}
                    >
                      ACCOUNT INFO
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { toggle('2'); }}
                      style={{cursor:"pointer", color: "#fffff0", backgroundColor: "#D6D6D7"}}

                    >
                      MY POSTS
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <Card style={{ backgroundColor: "#ffffff"}}>
                          <Container className="accountInfoTable">
                            <Table  hover>
                              <tbody >
                                <tr>
                                  <th scope="row">NAME</th>
                                  <td>testname</td>
                                </tr>
                                <tr>
                                  <th scope="row">EMAIL</th>
                                  <td>testname@gmail.com</td>
                                </tr>
                                <tr>
                                  <th scope="row">PASSWORD</th>
                                  <td>testname</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Container>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>


                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <Card body>
                          <CardTitle>Special Title Treatment</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>


                </TabContent>
              </div>
            </Col>
            <Col xs="3"></Col>
          </Row>
      </div>
      </div>
    </Provider>
  );
}
  /*
  //Copied from top 7:35PM, 6/1/2021
  <Row>
          <Col></Col>
          <Col >
            <Container >
              <Table hover>
                <tbody>
                  <tr>
                    <th scope="row">NAME</th>
                    <td>Ernest</td>
                  </tr>
                  <tr>
                    <th scope="row">EMAIL</th>
                    <td>ernest@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">PASSWORD</th>
                    <td>ernest</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
          <Col></Col>
        </Row>
    //End of Copy
  if (isAuthenticated) {
    if (state.auth.user) {
      const userName = state.auth.user.name;
      const email = state.auth.user.email;
      return (
        <Provider store={store}>
          <AppNavbar />
          <div>
            <h1>Login Info:</h1>
            <h3>Username: {userName}</h3>
            <h3>Email: {email}</h3>
          </div>
        </Provider>
      );
    }
  }
  return (
    <Provider store={store}>
      <AppNavbar />
      <div>
        <h1>Need to login to see info.</h1>
      </div>
    </Provider>
  );
}
*/