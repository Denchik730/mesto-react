function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : null}`}>
      <div className="popup__container">
        <form name={props.name}className="popup__form popup__form_edit" novalidate>
          <h2 className="popup__title-form">{props.title}</h2>
          {props.children}

          {/* <input required id="name-profile-input" name="name" type="text" className="popup__input popup__input_field_name" placeholder="Имя" value="Жак-Ив Кусто" minlength="2" maxlength="40"/>
          <span class="popup__input-error name-profile-input-error"></span>
          <input required id="post-input" name="about" type="text" class="popup__input popup__input_field_post" placeholder="О себе" value="Исследователь океана" minlength="2" maxlength="200"/>
          <span class="popup__input-error post-input-error"></span>

          <button type="submit" class="popup__button-form">Сохранить</button> */}
        </form>
        <button onClick={props.onClose} type="button" aria-label="Закрыть" class="popup__close"></button>
      </div>
    </section>
  );
}

export default PopupWithForm;