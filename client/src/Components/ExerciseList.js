import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

import "./ExerciseList.css";

//onClick calls setState which adjusts the items in the state of the Exercise List
//  and filters them so that if the item id is not equal to the id we click on will be passed on
//  meaning that the one that has the same id will be deleted from the UI
// We will also delete the item from the database separately

class ExerciseList extends Component {
  //trigger rerendering
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item; //destructuring, pulling items from this.state(items)
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="exercise-list">
            {items.map(({ _id, name }) => (
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
});
//state.item because of what we called it in index.js

export default connect(mapStateToProps, { getItems, deleteItem })(ExerciseList);
//mapStateToProps allows us to map item state to component property to use in ExerciseList
