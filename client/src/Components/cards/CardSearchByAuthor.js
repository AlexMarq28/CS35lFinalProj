import React, { Component } from "react";
import { Container, Input, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import WorkoutCard from "./WorkoutCard";
import { getCards } from "../../actions/cardActions";

class CardSearchByAuthor extends Component {
  //trigger rerendering
  componentDidMount() {
    this.props.getCards();
  }
  state = {
    cardSearchAuthor: "",
  };
  /**/
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let arrCards = [];
    const self = this;
    arrCards = this.props.card.cards.filter(
        card => card.email.includes(self.state.cardSearchAuthor) && self.state.cardSearchAuthor)
      ;
    
    let workoutCards = arrCards.map((card) => {
        return (
          <Col sm="4">
            <WorkoutCard card={card} />
          </Col>
        );
      });
    return (
        <Container>
            <Input className="font-link3"
              type="text"
              name="cardSearchAuthor"
              placeholder="SEARCH FOR AN EXERCISE ROUTINE BY AUTHOR"
              onChange={this.onChange}
            ></Input>
            <Container fluid>
                <Row>{workoutCards}</Row>
            </Container>
        </Container>
      );

    };

}
CardSearchByAuthor.propTypes = {
  getCards: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    card: state.card,
});

export default connect(mapStateToProps, {
  getCards
  })(CardSearchByAuthor);