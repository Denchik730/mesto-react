
function App() {
  return (
    <div className='page'>
      <header className="header page__header">
        <div className="logo header__logo"></div>
      </header>

      <main className="content">
        <section className="info page__info">
          <div className="info__profile">
            <div className="info__profile-avatar-wrapper">
              <img src="#" alt="Аватарка профиля" className="info__profile-avatar"/>
            </div>
            <div className="info__profile-descr">
              <h1 className="info__profile-name"></h1>
              <button type="button" aria-label="Редактировать" className="info__edit-button"></button>
            </div>
            <p className="info__profile-post"></p>
          </div>
          <button type="button" aria-label="Закрыть" className="info__add-button"></button>
        </section>

        <section className="elements page__elements">
          <div className="elements__grid-container">

            <template id="card-place">
              <figure className="card-place">
                <img src="#" className="card-place__img" alt="#"/>
                <button type="button" aria-label="Удалить" className="card-place__delete"></button>
                <figcaption className="card-place__descr">
                  <h2 className="card-place__name"></h2>
                  <div className="card-place__wrapper-likes">
                    <button type="button" aria-label="Нравиться" className="card-place__like"></button>
                    <p className="card-place__like-count"></p>
                  </div>
                </figcaption>
              </figure>
            </template>

          </div>
        </section>
      </main>

      <footer className="footer page__footer">
        <p className="footer__descr">&copy; 2022 Mesto Russia</p>
      </footer>

      <section className="popup popup_type_profile">
        <div className="popup__container">
          <form name="editForm" className="popup__form popup__form_edit" novalidate>
            <h2 className="popup__title-form">Редактировать профиль</h2>

            <input required id="name-profile-input" name="name" type="text" className="popup__input popup__input_field_name" placeholder="Имя" value="Жак-Ив Кусто" minlength="2" maxlength="40"/>
            <span class="popup__input-error name-profile-input-error"></span>
            <input required id="post-input" name="about" type="text" class="popup__input popup__input_field_post" placeholder="О себе" value="Исследователь океана" minlength="2" maxlength="200"/>
            <span class="popup__input-error post-input-error"></span>

            <button type="submit" class="popup__button-form">Сохранить</button>
          </form>
          <button type="button" aria-label="Закрыть" class="popup__close"></button>
        </div>
      </section>

      <section className="popup popup_type_add">
        <div className="popup__container">
          <form name="addForm" className="popup__form popup__form_add" novalidate>
            <h2 className="popup__title-form">Новое место</h2>
            <input required id="name-place-input" name="name" type="text" className="popup__input popup__input_field_place-name" placeholder="Название" minlength="2" maxlength="30"/>
            <span className="popup__input-error name-place-input-error"></span>
            <input required id="link-place-input" name="link" type="url" className="popup__input popup__input_field_place-link" placeholder="Ссылка на картинку"/>
            <span className="popup__input-error link-place-input-error"></span>
            <button type="submit" className="popup__button-form">Создать</button>
          </form>
          <button type="button" aria-label="Закрыть" className="popup__close"></button>
        </div>
      </section>

      <section className="popup popup_type_image">
        <div className="popup__container-image">
          <figure className="popup__place">
            <img src="#" className="popup__place-image" alt="#"/>
            <figcaption className="popup__place-descr"></figcaption>
          </figure>
          <button type="button" aria-label="Закрыть" className="popup__close"></button>
        </div>
      </section>

      <section className="popup popup_type_approval">
        <div className="popup__container">
          <form name="deleteForm" className="popup__form popup__form_approval" novalidate>
            <h2 className="popup__title-form">Вы уверены?</h2>
            <button type="submit" className="popup__button-form popup__button-form_type_approval">Да</button>
          </form>
          <button type="button" aria-label="Закрыть" className="popup__close"></button>
        </div>
      </section>

      <section className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <form name="addForm" className="popup__form popup__form_edit-avatar" novalidate>
            <h2 className="popup__title-form">Обновить аватар</h2>
            <input required id="link-avatar-input" name="avatar" type="url" className="popup__input popup__input_field_avatar-link" placeholder="Ссылка на картинку"/>
            <span className="popup__input-error link-avatar-input-error"></span>
            <button type="submit" className="popup__button-form">Сохранить</button>
          </form>
          <button type="button" aria-label="Закрыть" className="popup__close"></button>
        </div>
      </section>
    </div>
       
  );
}

export default App;
