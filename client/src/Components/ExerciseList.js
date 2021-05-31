import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import { grabEmail } from "../storeAccess/grabEmail";

import "./ExerciseList.css";

//onClick calls setState which adjusts the items in the state of the Exercise List
//  and filters them so that if the item id is not equal to the id we click on will be passed on
//  meaning that the one that has the same id will be deleted from the UI
// We will also delete the item from the database separately

class ExerciseList extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object.isRequired,
  };

  //trigger rerendering
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    console.log("Email sent as: " + grabEmail());
    let arrItems = [];
    //console.log(arrItems);
    //arrItems = this.props.item;
    // console.log("The array of items: ");
    // console.log(arrItems);

    if (grabEmail()) {
      arrItems = this.props.item.items.filter(
        (item) => item.email === grabEmail()
      );
      //console.log("The array of items modified: ");
      //console.log(arrItems);
    } else {
      return (
        <Container>
          <ListGroup>
            <ListGroupItem>Login or register to add items</ListGroupItem>
          </ListGroup>
        </Container>
      );
    }

    //const { items } = this.props.item;

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="exercise-list">
            {arrItems.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    //id comes from the item we got from this.props.item
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ExerciseList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});
//state.item because of what we called it in index.js

export default connect(mapStateToProps, {
  getItems,
  deleteItem,
})(ExerciseList);
//mapStateToProps allows us to map item state to component property to use in ExerciseList
