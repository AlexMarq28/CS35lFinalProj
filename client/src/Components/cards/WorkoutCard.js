import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { deleteCard } from "../../actions/cardActions";
import PropTypes from "prop-types";
import { grabEmail } from "../../storeAccess/grabEmail";

class WorkoutCard extends Component {
  constructor(props) {
    super(props);
  }

  isRightEmail = (email) => {
    if (email) if ((email = email = this.props.card.email)) return true;
  };

  onDeleteClick = (id) => {
    if (this.isRightEmail(grabEmail())) this.props.deleteCard(id);
  };

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{this.props.card.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {this.props.card.subtitle}
            </CardSubtitle>
            <CardText>{this.props.card.descript}</CardText>
            <Button
              className="remove-btn"
              color="danger"
              style={{ marginRight: 10 }}
              //id comes from the item we got from this.props.item
              onClick={this.onDeleteClick.bind(this, this.props.card._id)}
            >
              &times;
            </Button>
            <Button style={{ marginLeft: 10 }}>Like</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

//delete button
//<Button style={{ marginRight: 10 }}>Delete</Button>

WorkoutCard.propTypes = {
  deleteCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  deleteCard,
})(WorkoutCard);
