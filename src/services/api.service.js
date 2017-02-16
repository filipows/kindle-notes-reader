'use strict';

const API_URL = '/api'

export class ApiService {
    constructor(){
        this._apiUrl = API_URL;
    }

    getBooks() {
        return fetch(`${this._apiUrl}/books.json`)
            .then((response) => response.json())
            .catch((error) => {
                //console.error(error);  //TODO: uncomment
                return [];
            });
    }

    getHighlights(bookId) {
        return fetch(`${this._apiUrl}/book${bookId}.json`)
            .then((response) => response.json())
            .catch((error) => {
                // console.error(error);  //TODO: uncomment
            });
    }
}

export default ApiService;