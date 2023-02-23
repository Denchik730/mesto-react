import React from 'react';

import Card from './Card';

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
            <img
              src={userAvatar}
              alt="Аватарка профиля"
              className="info__profile-avatar"/>
          </div>
          <div className="info__profile-descr">
            <h1 className="info__profile-name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              aria-label="Редактировать"
              className="info__edit-button"/>
          </div>
          <p className="info__profile-post">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          aria-label="Закрыть"
          className="info__add-button"/>
      </section>

      <section className="elements page__elements">
        <div className="elements__grid-container">

          {cards.map(card => {
            return (
              <Card key={card._id} onCardClick={props.onCardClick} card={card}/>
            );
          })}

        </div>
      </section>
    </main>
  );
}

export default Main;
