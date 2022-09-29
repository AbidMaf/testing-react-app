import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <h1>Home Page</h1>
                <a href='/Post'>
                    <Button variant="primary">Post</Button>
                </a>
            </Card.Body>
        </Card>
    )
}

export default HomePage;