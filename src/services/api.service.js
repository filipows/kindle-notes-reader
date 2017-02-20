const API_URL = '/api';

export class ApiService {
  static getBooks() {
    return fetch(`${API_URL}/books.json`)
            .then(response => response.json())
            .catch(error =>
                // console.error(error);  //TODO: uncomment
                 []);
  }

  static getHighlights(bookId) {
    return fetch(`${API_URL}/book${bookId}.json`)
            .then(response => response.json())
            .catch((error) => {
                // console.error(error);  //TODO: uncomment
            });
  }
}

export default ApiService;
