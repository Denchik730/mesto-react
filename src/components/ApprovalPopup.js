import React from 'react';

import PopupWithForm from './PopupWithForm';

function ApprovalPopup({isOpen, onClose, isLoadingRequest, onDeleteCard, card, isSending}) {

  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm
      name="approval"
      title="Вы уверены?"
      buttonTitle="Да"
      isOpen={isOpen}
      onClose={onClose}
      isLoadingRequest={isLoadingRequest}
      onSubmit={handleSubmit}
      isDisabled={isSending}/>
  );
}

export default ApprovalPopup;
