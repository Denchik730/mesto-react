import React from 'react';

import api from '../utils/api';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAllNeededData()
      .then(data => {
        const [userData, cardData] = data;

        console.log(userData)
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);

      })
      .catch(err => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="info page__info">
        <div className="info__profile">
          <div onClick={props.onEditAvatar} className="info__profile-avatar-wrapper">
            <img src={userAvatar} alt="Аватарка профиля" className="info__profile-avatar"/>
          </div>
          <div className="info__profile-descr">
            <h1 className="info__profile-name">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Редактировать" className="info__edit-button"></button>
          </div>
          <p className="info__profile-post">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Закрыть" className="info__add-button"></button>
      </section>

      <section className="elements page__elements">
        <div className="elements__grid-container">

        {cards.map(card => {
          return (
            <figure className="card-place">
              <img src={card.link} className="card-place__img" alt={`Изображение ${card.name}`}/>
              <button type="button" aria-label="Удалить" className="card-place__delete"></button>
              <figcaption className="card-place__descr">
                <h2 className="card-place__name">{card.name}</h2>
                <div className="card-place__wrapper-likes">
                  <button type="button" aria-label="Нравиться" className="card-place__like"></button>
                  <p className="card-place__like-count">{card.likes.length}</p>
                </div>
              </figcaption>
            </figure>
          )
        })}


        </div>
      </section>
    </main>
  );
}

export default Main;