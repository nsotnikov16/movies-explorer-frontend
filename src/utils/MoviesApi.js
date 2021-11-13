export class MoviesApi {
  constructor(baseUrl) {
    this._url = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return res.json().then(({ message }) => Promise.reject(`${message}`));
  }

  getMovies() {
    return fetch(`${this._url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }
}

const api = new MoviesApi("https://api.nomoreparties.co/beatfilm-movies");
export default api;
