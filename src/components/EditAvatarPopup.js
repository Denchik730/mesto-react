import React from 'react';

import PopupWithForm from './PopupWithForm';

import { useFormWithValidation } from '../hooks/useFormWithValidation';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoadingRequest, isSending}) {
  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation();

  React.useEffect(() => {
    resetForm({}, {}, false);
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: values.avatar,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonTitle="Сохранить"
      isLoadingRequest={isLoadingRequest}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid || isSending}>
      <input
        required
        id="link-avatar-input"
        name="avatar"
        type="url"
        className={`popup__input ${errors.avatar && 'popup__input_type_error'} popup__input_field_avatar-link`}
        placeholder="Ссылка на картинку"
        value={values.avatar || ''}
        onChange={handleChange}
        />
      <span className={`popup__input-error ${errors.avatar && 'popup__input-error_active'} link-avatar-input-error`}>{errors.avatar || ''}</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
