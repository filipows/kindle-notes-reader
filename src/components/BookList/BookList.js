import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router'

class BookList extends Component {
  constructor(props){
    super(props);

    this.onBookLinkClickCallback.bind(this);
  }

  onBookLinkClickCallback(e) {
    let isActive = e.currentTarget.className == "active";
    let classes = e.currentTarget.children[0].classList;
  }

  render() {
    return (
      <ListGroup className="js-books">
        {this.props.books.map(book =>
          <Link 
            to={`/books/${book.id}`} 
            key={book.id} 
            activeClassName="active" 
            onClick={this.onBookLinkClickCallback}
          >
            <ListGroupItem
              className="js-book">
              {book.name}
            </ListGroupItem>
          </Link>
        )}
      </ListGroup>
    );
  }
}

export default BookList;