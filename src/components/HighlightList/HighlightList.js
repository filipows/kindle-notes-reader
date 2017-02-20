import React, { Component, PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { ApiService } from './../../services';

const propTypes = {
  highlights: PropTypes.array.isRequired
};

class HighlightList extends Component {
  constructor() {
    super();
    this.state = {
      highlights: []
    };

    this.updateHighlights = this.updateHighlights.bind(this);
  }

  componentWillReceiveProps(nextProps){
    let bookId = nextProps.params.bookId;
    this.updateHighlights(bookId);
  }

  componentWillMount(){
    let bookId = this.props.params.bookId;
    this.updateHighlights(bookId);
  }

  updateHighlights(bookId) {
    ApiService.getHighlights(bookId).then((highlights) => this.setState({ highlights }));
  }

  render() {
    return (
      <ListGroup>
        {this.state.highlights.map((highlight) => {
          return <ListGroupItem key={highlight.id}>{highlight.body}</ListGroupItem>
        })}
      </ListGroup>
    );
  }
}

HighlightList.propTypes = propTypes;

export default HighlightList;