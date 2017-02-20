import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router'

class BookListElement extends Component {

  render() {
    let toPath = `/books/${this.props.bookId}`;
    let isActive = this.context.router.isActive(toPath, true),
      className = isActive ? "active" : "";
    return (

      <ListGroupItem className={className}>
        <Link to={toPath}>
          {this.props.children}
        </Link>
      </ListGroupItem>
    );
  }
}

BookListElement.contextTypes = {
  router: React.PropTypes.object
};


export default BookListElement;