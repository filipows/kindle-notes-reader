import React, { Component, PropTypes } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const propTypes = {
  books: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

class BookList extends Component {
  render() {
    return (
      <ListGroup className="js-books">
        {this.props.books.map( book =>
          <ListGroupItem 
            key={book.id} 
            onClick={() => this.props.onClick(book.id)}
            className="js-book">
            {book.name}
          </ListGroupItem>
        )}
        </ListGroup>
    );
  }
}

BookList.propTypes = propTypes;

export default BookList;