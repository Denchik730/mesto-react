import avatar from '../images/avatar.png'


function Main(props) {

  return (
    <main className="content">
      <section className="info page__info">
        <div className="info__profile">
          <div onClick={props.onEditAvatar} className="info__profile-avatar-wrapper">
            <img src={avatar} alt="Аватарка профиля" className="info__profile-avatar"/>
          </div>
          <div className="info__profile-descr">
            <h1 className="info__profile-name">Жак-Ив Кусто</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Редактировать" className="info__edit-button"></button>
          </div>
          <p className="info__profile-post">Исследователь океана</p>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Закрыть" className="info__add-button"></button>
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
  );
}

export default Main;