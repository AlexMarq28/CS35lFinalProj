import "./CardModal.css";

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCard } from "../../actions/cardActions";

class CardModal extends Component {
  state = {
    modal: false,
    image: "",
    title: "",
    descript: "",
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    const newCard = {
      image: this.state.image,
      title: this.state.title,
      subtitle: this.props.user.name + " -- " + today,
      email: this.props.user.email,
      descript: this.state.descript,
    };

    // Add item via the add item action
    this.props.addCard(newCard);

    //Close modal
    this.toggle();
  };

  render() {
    return (
      <div className="cardModal">
        <Button
          color="dark"
          size="lg"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          CREATE POST
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="font-link3" toggle={this.toggle}>CREATE POST</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup
              style={{paddingBottom: "15px"}}
              >
                <Label className="font-link3" for="image">IMAGE</Label>
                <Input
                  className="font-link3"
                  type="text"
                  name="image"
                  id="image"
                  // placeholder="ADD IMAGE"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup
                style={{paddingBottom: "15px"}}
              >
                <Label className="font-link3" for="title">TITLE</Label>
                <Input
                  className="font-link3"
                  type="text"
                  name="title"
                  id="title"
                  // placeholder="ADD TITLE"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup
                style={{paddingBottom: "15px"}}
              >
                <Label className="font-link3" for="descript">DESCRIPTION</Label>
                <Input
                  className="font-link3"
                  type="textarea"
                  name="descript"
                  id="descript"
                  // placeholder="ADD DESCRIPTION"
                  onChange={this.onChange}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Button size="lg" className="font-link3" color="dark" style={{ width: '100%', marginTop: "2rem" }} block>
                  ADD POST TO FEED
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  card: state.card,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addCard })(CardModal);
