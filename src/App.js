import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    let books;
    fetch('http://localhost:3000/clippings.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({books: responseJson})
        books = responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let highlight = this.state.books[0];
    return (
      <div>
      <div className="App">
        Nazwa ksiązki: {highlight && highlight.book}<br/>
        Data utworzenia: {highlight && highlight.creation_date}<br/>
        Cytat: {highlight && highlight.body}<br/>
      </div>

      <Table
              rowsCount={100}
              rowHeight={50}
              width={1000}
              height={500}>
              <Column
                cell={<Cell>Basic content</Cell>}
                width={200}
              />
            </Table>
        </div>
    );
  }
}

export default App;
