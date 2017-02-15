import React, { Component } from 'react';
import './App.css';
import { Col, ListGroup, ListGroupItem, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

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

  componentDidMount() {
    fetch('/books.json')
      .then((response) => response.json())
      .then((books) => {
        this.setState({books})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateHighlights(bookId) {
    const url = `/book${bookId}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((highlights) => {
        this.setState({highlights: highlights})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  filterBooksByText(e) {
    this.setState({filterBooksText: e.target.value});    
  }

  render() {
    return (
      <div>
        <Col xs={12}>
          <FormGroup>
            <InputGroup>
              <FormControl 
                type="text" 
                value={this.state.filterBooksText} 
                placeholder="Type to filter books..."
                onChange={this.filterBooksByText} />
              <InputGroup.Addon>
                <Glyphicon glyph="search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col xs={2}>
          <ListGroup>
          {this.state.books.filter( (book) => book.name.toLowerCase().includes(this.state.filterBooksText.toLowerCase()) ).map((book) => {
            return <ListGroupItem 
                    key={book.id} 
                    onClick={() => this.updateHighlights(book.id)} 
                    >
                      {book.name}
                    </ListGroupItem>
          })}
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
