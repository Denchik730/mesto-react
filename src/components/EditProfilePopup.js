import React from 'react';

import PopupWithForm from './PopupWithForm';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoadingRequest}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }


  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonTitle="Сохранить"
      isLoadingRequest={isLoadingRequest}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        required
        id="name-profile-input"
        name="name"
        type="text"
        className="popup__input popup__input_field_name"
        placeholder="Имя"
        value={name || ''}
        onChange={handleNameChange}
        minLength="2"
        maxLength="40"
        />
      <span className="popup__input-error name-profile-input-error"></span>
      <input
        required
        id="post-input"
        name="about"
        type="text"
        className="popup__input popup__input_field_post"
        placeholder="О себе"
        value={description || ''}
        onChange={handleDescriptionChange}
        minLength="2"
        maxLength="200"
        />
      <span className="popup__input-error post-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
