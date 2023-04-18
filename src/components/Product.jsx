import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({img, title,description}) {
    return (
        <Card className={"border-0 shadow-sm"}>
            <Card.Img variant="top" src={img} alt={"picture"} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <p className="card-text">
                    <span className="text-primary fw-bold">$17.84</span> | <del>$22.30</del>
                </p>
                <div className="d-flex justify-content-between">
                    <Button variant="primary"><i className="bi bi-cart-plus"></i> Add Card</Button>
                    <Button variant="success"><i className="bi bi-bag"></i> Buy Now</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default Product;