function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <figure className="card-place">
      <img onClick={handleClick} src={props.card.link} className="card-place__img" alt={`Изображение ${props.card.name}`}/>
      <button type="button" aria-label="Удалить" className="card-place__delete"></button>
      <figcaption className="card-place__descr">
        <h2 className="card-place__name">{props.card.name}</h2>
        <div className="card-place__wrapper-likes">
          <button type="button" aria-label="Нравиться" className="card-place__like"></button>
          <p className="card-place__like-count">{props.card.likes.length}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;