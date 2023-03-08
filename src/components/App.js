import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
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
  // const [avatar, setAvatar] = React.useState('');

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
        })
        .catch(err => console.log(err))
    } else {
      api.likeCard(card._id)
        .then(newCard => {
          setCards((cards) => cards.map((item) => item._id === card._id ? newCard : item));
        })
        .catch(err => console.log(err))
    }
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .catch(err => console.log(err))
  }

  const handleUpdateUser = (data) => {
    api.setProfileUserInfo(data)
      .then(newDataUser => {
        setCurrentUser(newDataUser);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  const handleUpdateAvatar = (avatarData) => {
    api.changeUserAvatar(avatarData)
      .then(() => {
        setCurrentUser({...currentUser, avatar: avatarData.avatar});
        closeAllPopups();
      })
      .catch(err => console.log(err))
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
        cards={cards}
        />
      <Footer/>

      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

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

      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

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
