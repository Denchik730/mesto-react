function ImagePopup(props) {
  console.log(props.card)
  return (
    <section className={`popup popup_type_image ${props.card && 'popup_opened'}`}>
      <div className="popup__container-image">
        <figure className="popup__place">
          <img src={props.card && props.card.link} className="popup__place-image" alt={`Изображение ${props.card && props.card.name}`}/>
          <figcaption className="popup__place-descr">{props.card && props.card.name}</figcaption>
        </figure>
        <button onClick={props.onClose} type="button" aria-label="Закрыть" className="popup__close"></button>
      </div>
    </section>
  );
}

export default ImagePopup;