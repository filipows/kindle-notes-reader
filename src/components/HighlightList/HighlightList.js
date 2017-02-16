import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

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

export default HighlightList;