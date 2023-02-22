function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form name={props.name}className="popup__form popup__form_edit" novalidate>
          <h2 className="popup__title-form">{props.title}</h2>
          {props.children}
          <button type="submit" className={`popup__button-form ${props.name === 'approval' ? 'popup__button-form_type_approval' : null}`}>{props.buttonTitle}</button>
        </form>
        <button onClick={props.onClose} type="button" aria-label="Закрыть" class="popup__close"></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
