import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.NL8o5X9Gzi1Ukxgn_nFYjwHaHa?pid=ImgDet&rs=1" />
            <Card.Body>
                <Card.Title>Coca-Cola Coke 500 Ml</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;