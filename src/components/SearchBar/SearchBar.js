import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

const propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

const defaultProps = {
  placeholder: 'Type to filter...',
};

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

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;


export default SearchBar;
