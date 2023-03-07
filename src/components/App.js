import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import api from '../utils/api';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isApprovalPopupOpen, setIsApprovalPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err))
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch(err => console.log(err))
  }, [])

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    if (isLiked) {
      api.dislikeCard(card._id)
        .then(newCard => {
          setCards((cards) => cards.map((item) => item._id === card._id ? newCard : item));
        });
    } else {
      api.likeCard(card._id)
        .then(newCard => {
          setCards((cards) => cards.map((item) => item._id === card._id ? newCard : item));
        });
    }
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
        .then(() => {
          setCards((cards) => cards.filter((item) => item._id !== card._id));
        });
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsApprovalPopupOpen(false);

    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>

      <Header/>

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}/>
      <Footer/>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          required
          id="name-profile-input"
          name="name"
          type="text"
          className="popup__input popup__input_field_name"
          placeholder="Имя"
          value="Жак-Ив Кусто"
          minlength="2"
          maxlength="40"/>
        <span className="popup__input-error name-profile-input-error"></span>
        <input
          required
          id="post-input"
          name="about"
          type="text"
          className="popup__input popup__input_field_post"
          placeholder="О себе"
          value="Исследователь океана"
          minlength="2"
          maxlength="200"/>
        <span className="popup__input-error post-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          required
          id="name-place-input"
          name="name"
          type="text"
          className="popup__input popup__input_field_place-name"
          placeholder="Название"
          minlength="2"
          maxlength="30"/>
        <span className="popup__input-error name-place-input-error"></span>
        <input
          required
          id="link-place-input"
          name="link"
          type="url"
          className="popup__input popup__input_field_place-link"
          placeholder="Ссылка на картинку"/>
        <span className="popup__input-error link-place-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          required
          id="link-avatar-input"
          name="avatar" type="url"
          className="popup__input popup__input_field_avatar-link"
          placeholder="Ссылка на картинку"/>
        <span className="popup__input-error link-avatar-input-error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}/>

      <PopupWithForm
        name="approval"
        title="Вы уверены?"
        buttonTitle="Да"
        isOpen={isApprovalPopupOpen}
        onClose={closeAllPopups}>
      </PopupWithForm>

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
