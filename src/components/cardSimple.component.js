// This file is now redundant - replaced by eventAccordion.component.js
import { Button, Card, Container, Row } from "react-bootstrap";

function SimpleCard(props) {
  const events = props.events;
  const renderedEvents = events.map((event) => {
    return (
      <Card key={event.id} className="card" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>
            {event.date} {event.time}
          </Card.Title>
          <Card.Text>{event.name}</Card.Text>
          <Button id={event.id} variant="primary">
            Show more
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container>
      <Row>{renderedEvents}</Row>
    </Container>
  );
}

export default SimpleCard;
