function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <figure className="card-place">
      <img
        onClick={handleClick}
        src={card.link}
        className="card-place__img"
        alt={`Изображение ${card.name}`}/>
      <button type="button" aria-label="Удалить" className="card-place__delete"/>
      <figcaption className="card-place__descr">
        <h2 className="card-place__name">{card.name}</h2>
        <div className="card-place__wrapper-likes">
          <button type="button" aria-label="Нравиться" className="card-place__like"/>
          <p className="card-place__like-count">{card.likes.length}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;
