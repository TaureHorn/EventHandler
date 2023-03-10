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
            <h2>{event.name}</h2>
            <br />
            <h5>{event.date}</h5>
            <h5>{event.time}</h5>
          </Accordion.Header>
          <AccordionBody>
            <h3>Location: {event.location}</h3>
            <hr></hr>
            <h4>Info</h4>
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
    <Container>
      {renderedEvents}
      <button onClick={props.getEvents}> Update events </button>
    </Container>
  );
}

export default EventAccordion;
