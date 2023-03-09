import React from 'react';

import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace, isLoadingRequest}) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace({
      name,
      link: link,
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
      onSubmit={handleSubmit}>
      <input
        required
        id="name-place-input"
        name="name"
        type="text"
        className="popup__input popup__input_field_place-name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleNameChange}/>
      <span className="popup__input-error name-place-input-error"></span>
      <input
        required
        id="link-place-input"
        name="link"
        type="url"
        className="popup__input popup__input_field_place-link"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleLinkChange}/>
      <span className="popup__input-error link-place-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
