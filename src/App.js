import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      highlights: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/clippings.json')
      .then((response) => response.json())
      .then((highlights) => {
        this.setState({highlights})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <Table
              rowsCount={this.state.highlights.length}
              rowHeight={100}
              headerHeight={50}
              width={1000}
              maxHeight={500}>
              <Column
                header={<Cell>Book</Cell>}
                cell={props => (
                  <Cell {...props}>
                    {this.state.highlights[props.rowIndex].book}
                  </Cell>
                )}
                width={200}
              />
              <Column
                header={<Cell>Date</Cell>}
                cell={props => (
                  <Cell {...props}>
                    {this.state.highlights[props.rowIndex].creation_date}
                  </Cell>
                )}
                width={200}
              />
              <Column
                header={<Cell>Highlight</Cell>}
                cell={props => (
                  <Cell {...props}>
                    {this.state.highlights[props.rowIndex].body}
                  </Cell>
                )}
                width={600}
              />

            </Table>
        </div>
    );
  }
}

export default App;
