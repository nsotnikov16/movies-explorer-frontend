export class MainApi {
  constructor(baseUrl) {
    this._headers = (token) => {
      return {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
    };
    this._url = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return res.json().then(({ message }) => Promise.reject(`${message}`));
  }

  getMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: this._headers(token),
    }).then(this._handleResponse);
  }

  saveMovie(
    token,
    {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      id,
    }
  ) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers(token),
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailer: trailerLink,
        nameRU,
        nameEN: nameEN === "" ? nameRU : nameEN,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
      }),
    }).then(this._handleResponse);
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers(token),
    }).then(this._handleResponse);
  }

  register = (email, password, name) => {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    }).then(this._handleResponse);
  };

  editProfile(name, email, token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers(token),
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._handleResponse);
  }

  authorize = (email, password) => {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => response.json());
  };

  checkToken = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers(token),
    })
      .then((res) => res.json())
      .then((data) => data);
  };
}

const api = new MainApi("https://api.movies-sotnikov.nomoredomains.monster");
export default api;
