import React from 'react';

import PopupWithForm from './PopupWithForm';

import { useFormWithValidation } from '../hooks/useFormWithValidation';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoadingRequest, isSending}) {

  const currentUser = React.useContext(CurrentUserContext);

  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation();

  React.useEffect(() => {
    resetForm(currentUser, {}, true);
  }, [currentUser, isOpen, resetForm]);


  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      about: values.about,
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
      onSubmit={handleSubmit}
      isDisabled={!isValid || isSending}>
      <input
        required
        id="name-profile-input"
        name="name"
        type="text"
        className={`popup__input ${errors.name && 'popup__input_type_error'} popup__input_field_name`}
        placeholder="Имя"
        value={values.name || ''}
        onChange={handleChange}
        minLength="2"
        maxLength="40"
        />
      <span className={`popup__input-error ${errors.name && 'popup__input-error_active'} name-profile-input-error`}>{errors.name || ''}</span>
      <input
        required
        id="post-input"
        name="about"
        type="text"
        className={`popup__input ${errors.about && 'popup__input_type_error'} popup__input_field_post`}
        placeholder="О себе"
        value={values.about || ''}
        onChange={handleChange}
        minLength="2"
        maxLength="200"
        />
      <span className={`popup__input-error ${errors.about && 'popup__input-error_active'} post-input-error`}>{errors.about || ''}</span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
