function PopupWithForm({name, title, buttonTitle, isOpen, onClose, children}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form name={name} className="popup__form popup__form_edit" novalidate>
          <h2 className="popup__title-form">{title}</h2>
          {children}
          <button
            type="submit"
            className={`popup__button-form ${name === 'approval' ? 'popup__button-form_type_approval' : null}`}>
            {buttonTitle}
          </button>
        </form>
        <button
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
          class="popup__close"/>
      </div>
    </section>
  );
}

export default PopupWithForm;
