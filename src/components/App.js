import Header from './Header';
import Footer from './Footer';
import Main from './Main';


function App() {
  return (
    <div className='page'>

      <Header/>

      <Main/>

      <Footer/>

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
