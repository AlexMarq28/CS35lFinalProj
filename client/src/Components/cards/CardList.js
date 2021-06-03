import "./CardList.css";

import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getCards } from "../../actions/cardActions";
import PropTypes from "prop-types";
import { grabEmail } from "../../storeAccess/grabEmail";
import WorkoutCard from "./WorkoutCard";

class CardList extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object.isRequired,
  };

  //trigger rerendering
  componentDidMount() {
    this.props.getCards();
  }

  onDeleteClick = (id) => {
    this.props.deleteCard(id);
  };

  //console.log("Email sent as: " + grabEmail());
  //console.log(arrCards);
  //console.log("The array of cards: ");
  //console.log(arrCards);
  //console.log("The array of cards modified: ");
  //console.log(arrCards);

  render() {
    //console.log("Email sent as: " + grabEmail());
    let arrCards = [];
    //console.log(arrCards);
    //console.log(this.props.card);
    if (grabEmail()) {
      //console.log("This is running");
      arrCards = this.props.card.cards.filter(
        (card) => card.email === grabEmail()
      );
      console.log("The array of cards modified: ");
      console.log(arrCards);
    } else {
      return (
        <Container>
          <ListGroup>
            <ListGroupItem>Login or register to add cards</ListGroupItem>
          </ListGroup>
        </Container>
      );
    }

    let workoutCards = arrCards.map((card) => {
      return (
        /*<Col sm="4">
          <WorkoutCard card={card} />
      </Col> */
        <WorkoutCard card={card} />
      );
    });
    //render the cards
    return (
      <div className="workoutCards">
        <Container className="workoutCards" fluid style={{maxWidth: "600px"}}>
          <Row >{workoutCards}</Row>
        </Container>
      </div>

    );
  }
}

CardList.propTypes = {
  getCards: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  card: state.card,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  getCards,
})(CardList);
