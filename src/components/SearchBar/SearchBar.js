import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';


class SearchBar extends Component {
  render() {
    return (
      <FormGroup>
        <InputGroup>
          <FormControl 
            type="text" 
            value={this.props.value} 
            placeholder={this.props.placeholder}
            onChange={this.props.onChange} 
            className="js-search-input"
          />
          <InputGroup.Addon>
            <Glyphicon glyph="search" />
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default SearchBar;