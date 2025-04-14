import React from "react";

const EventItem = ({ id, info, name, image, onEventClick }) => {
  const handleSeeMoreClick = (event) => {
    event.stopPropagation();
    onEventClick(id);
  };

  return (
    <div onClick={() => console.log("Padre clickeado")}>
      <img src={image} alt={name} width={200} height={200} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver más</button>
    </div>
  );
};

export default EventItem;
