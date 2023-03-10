import { Button, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { Link } from "react-router-dom";

function EventAccordion(props) {
  const ButtonHandler = (event, type) => {
    const id = event.event._id;
    if (type === "update") {
      props.updateIdCatch(id);
      props.updateTrigger(id);
    }
    if (type === "delete") {
      props.client.deleteEventById(id);
      props.updateTrigger(id);
    }
  };

  const renderedEvents = props.events.map((event) => {
    return (
      <Accordion
        key={event._id}
        defaultActiveKey="0"
        style={{ width: "70rem" }}
      >
        <AccordionItem eventKey={event._id}>
          <Accordion.Header>
            <div className="event-bar">
              <h2>{event.name}</h2>
              <br />
              <div className="event-right">
                <h5>{event.date}</h5>
                <h5>{event.time}</h5>
              </div>
            </div>
          </Accordion.Header>
          <AccordionBody>
            <h3 className="form-text">Location: {event.location}</h3>
            <hr></hr>
            <p>{event.info}</p>
            <Link to={"/updateevent"}>
              <Button
                variant="success"
                onClick={() => ButtonHandler({ event }, "update")}
              >
                Update
              </Button>
            </Link>
            <Button
              variant="danger"
              onClick={() => ButtonHandler({ event }, "delete")}
            >
              Delete
            </Button>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    );
  });

  return (
    <Container className="cont-center">
      <div className="center">
        <div className="center">
          <div className="center">
            <h1 className="page-title">Events</h1>
          </div>
          {renderedEvents}
          <button onClick={() => props.client.getEvents()}>
            {" "}
            Update events{" "}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default EventAccordion;
