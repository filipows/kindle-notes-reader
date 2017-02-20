import React, { Component, PropTypes } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router'
import { BookListElement } from './../../components';

const propTypes = {
  books: PropTypes.array.isRequired,
};

class BookList extends Component {
  render() {
    return (
      <ListGroup className="js-books">
        {this.props.books.map(book =>
          <BookListElement bookId={book.id} key={book.id}>
            {book.name}
          </BookListElement>
        )}
      </ListGroup>
    );
  }
}

BookList.propTypes = propTypes;

export default BookList;