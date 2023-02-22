import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isApprovalPopupOpen, setIsApprovalPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);


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
    <div className='page'>

      <Header/>

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}/>
      <Footer/>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input required id="name-profile-input" name="name" type="text" className="popup__input popup__input_field_name" placeholder="Имя" value="Жак-Ив Кусто" minlength="2" maxlength="40"/>
        <span class="popup__input-error name-profile-input-error"></span>
        <input required id="post-input" name="about" type="text" class="popup__input popup__input_field_post" placeholder="О себе" value="Исследователь океана" minlength="2" maxlength="200"/>
        <span class="popup__input-error post-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input required id="name-place-input" name="name" type="text" className="popup__input popup__input_field_place-name" placeholder="Название" minlength="2" maxlength="30"/>
        <span className="popup__input-error name-place-input-error"></span>
        <input required id="link-place-input" name="link" type="url" className="popup__input popup__input_field_place-link" placeholder="Ссылка на картинку"/>
        <span className="popup__input-error link-place-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input required id="link-avatar-input" name="avatar" type="url" className="popup__input popup__input_field_avatar-link" placeholder="Ссылка на картинку"/>
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
  );
}

export default App;
