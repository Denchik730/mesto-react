import React from 'react';

import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <input
        required
        id="link-avatar-input"
        name="avatar" type="url"
        className="popup__input popup__input_field_avatar-link"
        placeholder="Ссылка на картинку"
        ref={inputRef}/>
      <span className="popup__input-error link-avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
