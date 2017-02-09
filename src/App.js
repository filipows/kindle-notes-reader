import React, { Component } from 'react';
import './App.css';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
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

  render() {
    return (
      <div>
        <Col md={2}>
          <ListGroup>
          {this.state.books.map((book) => {
            return <ListGroupItem key={book.id} href="#{book.name}">{book.name}</ListGroupItem>
          })}
          </ListGroup>
        </Col>
        <Col md={10}>cytaty</Col>
      </div>
    );
  }
}

export default App;
