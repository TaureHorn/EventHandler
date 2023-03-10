// This file is now redundant - replaced by eventAccordion.component.js
import { Button, Card, Container, Row } from "react-bootstrap";

function DetailedCard(props) {
    const event = props.event;
    console.log(event)
return (
    <Card key={event.id} class="card" style={{ width: '30rem' }}>
        <Card.Body>
            <Card.Title>
                <h2>{props.date} {props.time}</h2>
            </Card.Title>
            <Card.Text>
                <p>{props.name}</p>
                <p>{props.location}</p>
                <p>{props.info}</p>
            </Card.Text>            
            <Button variant="primary">Show less</Button>
            <Button variant="success">Update</Button>
            <Button variant="danger">Delete</Button>
        </Card.Body>
    </Card>
);
}

export default DetailedCard;