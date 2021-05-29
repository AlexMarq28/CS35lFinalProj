import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getPhotos, deletePhoto } from "../actions/photoActions";
import PropTypes from "prop-types";

import "./PhotoFrame.css";

//onClick calls setState which adjusts the photos in the state of the Exercise List
//  and filters them so that if thephoto id is not equal to the id we click on will be passed on
//  meaning that the one that has the same id will be deleted from the UI
// We will also delete the photo from the database separately

class PhotoFrame extends Component {
  //trigger rerendering
  componentDidMount() {
    this.props.getPhotos();
  }

  onDeleteClick = (id) => {
    this.props.deletePhoto(id);
  };

  render() {
    const { photos } = this.props.photo; //destructuring, pulling photos from this.state(photo)
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="photo-frame">
            {photos.map(({ _id, img, photoCaption, photoLocation }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    //id comes from the photo we got from this.props.photo
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {img}
                  {photoCaption}
                  {photoLocation}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

PhotoFrame.propTypes = {
  getPhotos: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  photo: state.photo,
});
//state.photo because of what we called it in index.js

export default connect(mapStateToProps, { getPhotos, deletePhoto })(PhotoFrame);
//mapStateToProps allows us to map photo state to component property to use in ExerciseList
