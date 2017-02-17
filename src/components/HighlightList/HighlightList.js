import React, { Component, PropTypes } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const propTypes = {
  highlights: PropTypes.array.isRequired
};

class HighlightList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.highlights.map((highlight) => {
          return <ListGroupItem key={highlight.id}>{highlight.body}</ListGroupItem>
        })}
      </ListGroup>
    );
  }
}

HighlightList.propTypes = propTypes;

export default HighlightList;