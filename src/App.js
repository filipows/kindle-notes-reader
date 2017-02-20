import React, { Component } from 'react';
import './App.css';
import { Col } from 'react-bootstrap';

import { ApiService } from './services';
import { BookList, SearchBar } from './components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      filterBooksText: '',
    };

    this.filterBooksByText = this.filterBooksByText.bind(this);
  } 

  componentWillMount() {
    ApiService.getBooks().then((books) => this.setState({ books }))
  }

  filterBooksByText(e) {
    this.setState({ filterBooksText: e.target.value });
  }

  render() {
    let books = this.state.books;
    if (this.state.filterBooksText) {
      books = books.filter(book =>
        book.name.toLowerCase()
          .includes(this.state.filterBooksText.toLowerCase()));
    }

    return (
      <div>
        <Col xs={12}>
          <SearchBar
            value={this.state.filterBooksText}
            placeholder="Type to filter books..."
            onChange={this.filterBooksByText}
          />
        </Col>
        <Col xs={2}>
          <BookList books={books} />
        </Col>
        <Col xs={10}>
          {this.props.children || "Click on the book to see its highlights."}
        </Col>
      </div>
    );
  }
}

export default App;