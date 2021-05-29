import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addPhoto } from "../actions/photoActions";
//var fs = require ('fs');

class PhotoModal extends Component {
  state = {
    modal: false,
    photoCaption: "",
    img: undefined 
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

    const newPhoto = {
    //  photoLocation: this.state.photoLocation,
      photoCaption: this.state.photoCaption,
      img: this.state.img
    };

    // Add photo via the add photo action
    this.props.addPhoto(newPhoto);

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
          Add Photo
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Photo Frame</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="photo">Photo</Label>
                
                <Input
                  type="text"
                  name="photoCaption"
                  id="photo"
                  placeholder="Include a caption"
                  onChange={this.onChange}
                ></Input>
                <Input type="file" name="img" id="photo" formEncType="multipart/form-data" />
                <FormText color="muted">
                  Select a photo from your local system
                </FormText>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Photo
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
  photo: state.photo,
});

export default connect(mapStateToProps, { addPhoto })(PhotoModal);



               /*<Input type="text"
                  name="photoLocation"
                  id="photo"
                  placeholder="Add exercise photo location"
                  onChange={this.onChange}
                ></Input>*/