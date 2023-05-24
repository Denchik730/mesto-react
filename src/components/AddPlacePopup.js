import React from 'react';

import PopupWithForm from './PopupWithForm';

import { useFormWithValidation } from '../hooks/useFormWithValidation';

function AddPlacePopup({isOpen, onClose, onAddPlace, isLoadingRequest}) {
  const {values, handleChange, resetForm, errors, isValid} = useFormWithValidation();

  React.useEffect(() => {
    resetForm({}, {}, false)
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name: values.name,
      link: values.link,
    });

  }

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonTitle="Создать"
      isLoadingRequest={isLoadingRequest}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}>
      <input
        required
        id="name-place-input"
        name="name"
        type="text"
        className={`popup__input ${errors.name && 'popup__input_type_error'} popup__input_field_place-name`}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={values.name || ''}
        onChange={handleChange}/>
      <span className={`popup__input-error ${errors.name && 'popup__input-error_active'} name-place-input-error`}>{errors.name || ''}</span>
      <input
        required
        id="link-place-input"
        name="link"
        type="url"
        className={`popup__input ${errors.link && 'popup__input_type_error'} popup__input_field_place-link`}
        placeholder="Ссылка на картинку"
        value={values.link || ''}
        onChange={handleChange}/>
      <span className={`popup__input-error ${errors.link && 'popup__input-error_active'} link-place-input-error`}>{errors.link || ''}</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
