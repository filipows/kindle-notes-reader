import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders search input', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.js-search-input').length).toEqual(1);
});

it('renders search input with placeholder', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.js-search-input').props()['placeholder']).toEqual('Type to filter books...');
});

it('renders books list', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.js-books').length).toBe(1);
});


