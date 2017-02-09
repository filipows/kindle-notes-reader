import React, { Component } from 'react';
import './App.css';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      highlights: []
    };
  } 

  componentDidMount() {
    fetch('http://localhost:3000/books.json')
      .then((response) => response.json())
      .then((books) => {
        this.setState({books})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateHighlights(bookId) {
    fetch('http://localhost:3000/books_1.json')
      .then((response) => response.json())
      .then((highlights) => {
        // this.setState({highlights: highlights})
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <div>
        <Col md={2}>
          <ListGroup>
          {this.state.books.map((book) => {
            return <ListGroupItem 
                    key={book.id} 
                    onClick={() => this.updateHighlights(book.id)} 
                    href="#{book.name}">
                      {book.name}
                    </ListGroupItem>
          })}
          </ListGroup>
        </Col>
        <Col md={10}>cytaty
          <ListGroup>
            {this.state.highlights.map((highlight) => {
              return <ListGroupItem href="#{book.name}">{highlight.body}</ListGroupItem>
            })}
          </ListGroup>
        </Col>
      </div>
    );
  }
}

export default App;
