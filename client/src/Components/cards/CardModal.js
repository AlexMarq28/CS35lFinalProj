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
import { addCard } from "../../actions/cardActions";
import PropTypes from "prop-types";

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
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Post
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Your Workouts</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Add image to workout"
                  onChange={this.onChange}
                ></Input>

                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Add title to workout"
                  onChange={this.onChange}
                ></Input>

                <Label for="descript">Description</Label>
                <Input
                  type="text"
                  name="descript"
                  id="descript"
                  placeholder="Add description to workout"
                  onChange={this.onChange}
                ></Input>

                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Post
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
