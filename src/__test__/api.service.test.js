'use strict';

import {ApiService} from '../services'

jest.mock('../services/api.service'); 
const apiService = new ApiService();

describe('#getBooks() using Promises', () => {
  it('should load list of books', () => {
    return apiService.getBooks().then(data => {
      expect(data).toBeDefined();
      expect(data.length).toBe(2);
      expect(data[0].id).toEqual(1);
    })
  })
});


describe('#getHighlights() using Promises', () => {
  it('should load list of highlights for specified book', () => {
    return apiService.getHighlights(1).then(data => {
      expect(data).toBeDefined();
      expect(data.length).toBe(2);
    })
  })
});
