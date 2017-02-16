import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

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

export default BookList;