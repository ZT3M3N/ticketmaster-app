import styles from "./EventItem.module.css";

const EventItem = ({ id, info, name, image, onEventClick }) => {
  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      onClick={() => console.log("Padre clickeado")}
      className={styles.eventItemContainer}
    >
      <img src={image} alt={name} width={200} height={200} />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBnt}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
