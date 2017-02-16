import React, { Component } from 'react';
import './App.css';
import { Col } from 'react-bootstrap';
import {ApiService} from './services';


//TODO: how to do something like this?
// import {BookList, HighlightList, SearchBar} from './components';
import BookList from './components/BookList';
import HighlightList from './components/HighlightList';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      highlights: [],
      filterBooksText: '',
    };

    this.filterBooksByText = this.filterBooksByText.bind(this);
  } 

  componentWillMount() {
    ApiService.getBooks().then((books) => this.setState({books}))
  }

  updateHighlights(bookId) {
    ApiService.getHighlights(bookId).then((highlights) => this.setState({highlights}));
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
          <SearchBar 
            value={this.state.filterBooksText}
            placeholder="Type to filter books..."
            onChange={this.filterBooksByText.bind(this)}/>
        </Col>
        <Col xs={2}>
          <BookList books={books} onClick={this.updateHighlights.bind(this)}/>
        </Col>
        <Col xs={10}>cytaty
          <HighlightList highlights={this.state.highlights}/>
        </Col>
      </div>
    );
  }
}

export default App;
