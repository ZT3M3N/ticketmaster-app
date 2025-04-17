import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";
import { useNavigate } from "react-router-dom";

const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventsData();
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
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

  if (error) {
    return <div>Ha ocurrido un error</div>;
  }

  if (isLoading) {
    return <div>Cargando resultados...</div>;
  }

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
