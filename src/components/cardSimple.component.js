import { Button, Card } from 'react-bootstrap';

function SimpleCard(props) {
return (
    <Card class="card" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>
                <h3>Welcome to the big brain club</h3>
                <h2>{props.date} {props.time}</h2>
            </Card.Title>
            <Card.Text>
                <p>{props.name}</p>
            </Card.Text>            
            <Button variant="primary">Show more</Button>
        </Card.Body>
    </Card>
);
}

export default SimpleCard