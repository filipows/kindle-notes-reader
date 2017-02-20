import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { browserHistory } from 'react-router'

class BookListElement extends Component {
  constructor(props){
    super(props);
    this.bookListElementClickCallback = this.bookListElementClickCallback.bind(this);
    this.toPath = `/books/${this.props.bookId}`;
  }

  bookListElementClickCallback(event) {
    browserHistory.push(this.toPath);
    return true;
  }

  render() {
    let toPath = `/books/${this.props.bookId}`;
    let isActive = this.context.router.isActive(this.toPath, true),
      className = isActive ? "active" : "";
    return (
      <ListGroupItem className={className} onClick={this.bookListElementClickCallback}>
          {this.props.children}
      </ListGroupItem>
    );
  }
}

BookListElement.contextTypes = {
  router: React.PropTypes.object
};

export default BookListElement;