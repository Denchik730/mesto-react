class Api {
  constructor({baseUrl, headers}) {
    this._url = baseUrl;
    this._headers = headers
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    }).then(this._checkRes)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    }).then(this._checkRes)
  }

  setProfileUserInfo(dataUser) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: dataUser.name,
        about: dataUser.about
      })
    }).then(this._checkRes)
  }

  addNewUserCard(dataCard) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: dataCard.name,
        link: dataCard.link
      })
    }).then(this._checkRes)
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkRes)
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._checkRes)
  }

  dislikeCard(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DElETE',
      headers: this._headers
    }).then(this._checkRes)
  }

  changeUserAvatar(dataAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: dataAvatar.avatar
      })
    }).then(this._checkRes)
  }

  getAllNeededData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: '85aaf06b-bad2-4dd5-8526-2a71ddd32563',
    'Content-Type': 'application/json'
  }
});

export default api;