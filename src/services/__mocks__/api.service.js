'use strict';

const fs = require('fs');

// Mock for ApiService
export class ApiService {
    constructor(){
    }

    getBooks() {
      return new Promise((resolve, reject) => {
        fs.readFile(`./src/services/__mocks__/__mockData__/books.json`, 'utf8', (err, data) => {
          if (err) reject(err)
          resolve(JSON.parse(data));
        });
      });
    }

    getHighlights(bookId) {
      return new Promise((resolve, reject) => {
        fs.readFile(`./src/services/__mocks__/__mockData__/book${bookId}.json`, 'utf8', (err, data) => {
          if (err) reject(err)
          resolve(JSON.parse(data))
        });
      });
    }
}

export default ApiService;