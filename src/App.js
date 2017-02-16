import React, { Component } from 'react';
import './App.css';
import { Col, ListGroup, ListGroupItem, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

import {ApiService} from './services';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      highlights: [],
      filterBooksText: '',
    };

    this.filterBooksByText = this.filterBooksByText.bind(this);
    this.apiService = new ApiService(); //TODO: consider using static api methods
  } 

  componentWillMount() {
    this.apiService.getBooks().then((books) => this.setState({books}))
  }

  updateHighlights(bookId) {
    this.apiService.getHighlights(bookId).then((highlights) => this.setState({highlights}));
  }

  filterBooksByText(e) {
    this.setState({filterBooksText: e.target.value});    
  }

  render() {
    let books = this.state.books;
    if (this.state.filterBooksText) {
      books = books.filter( book => 
        book.name.toLowerCase()
        .includes(this.state.filterBooksText.toLowerCase()));
    }

    return (
      <div>
        <Col xs={12}>
          <FormGroup>
            <InputGroup>
              <FormControl 
                type="text" 
                value={this.state.filterBooksText} 
                placeholder="Type to filter books..."
                onChange={this.filterBooksByText} 
                className="js-search-input"
              />
              <InputGroup.Addon>
                <Glyphicon glyph="search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col xs={2}>
          <ListGroup className="js-books">
            {books.map( book =>
              <ListGroupItem 
                key={book.id} 
                onClick={() => this.updateHighlights(book.id)}
                className="js-book"
              >
                {book.name}
              </ListGroupItem>
            )}
            </ListGroup>
        </Col>
        <Col xs={10}>cytaty
          <ListGroup>
            {this.state.highlights.map((highlight) => {
              return <ListGroupItem key={highlight.id}>{highlight.body}</ListGroupItem>
            })}
          </ListGroup>
        </Col>
      </div>
    );
  }
}

export default App;
