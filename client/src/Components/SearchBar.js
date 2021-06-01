import "./SearchBar.css";

import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Input, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";



import "./ExerciseList.css";

//onClick calls setState which adjusts the items in the state of the Exercise List
//  and filters them so that if the item id is not equal to the id we click on will be passed on
//  meaning that the one that has the same id will be deleted from the UI
// We will also delete the item from the database separately

class SearchBar extends Component {
  //trigger rerendering
  componentDidMount() {
    this.props.getItems();
  }
  state = {
    search: "",
  };
  /**/
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { items } = this.props.item; //destructuring, pulling items from this.state(items)
    const self = this;
    return (
      <Container>
        <Input className="font-link3"
          type="text"
          name="search"
          placeholder="SEARCH FOR AN EXERCISE ITEM"
          onChange={this.onChange}
            ></Input>
        <ListGroup>
          <TransitionGroup className="search-bar">
            {items.filter(item => item.name.includes(self.state.search) && self.state.search).map(({ _id, name })=> (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
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

SearchBar.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});
//state.item because of what we called it in index.js

export default connect(mapStateToProps, { getItems })(SearchBar);
//mapStateToProps allows us to map item state to component property to use in ExerciseList
