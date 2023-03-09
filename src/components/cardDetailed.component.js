import { Button, Card } from 'react-bootstrap';

function DetailedCard(props) {
return (
    <Card class="card" style={{ width: '18rem' }}>
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