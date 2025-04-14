import React, { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJSON);
  const events = data._embedded.events;

  const handleEventClick = (id) => {
    console.log("evento clickeado:" + id);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm?.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={eventItem.id}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventClick}
        id={eventItem.id}
      />
    ));
  };

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
