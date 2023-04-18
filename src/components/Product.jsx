import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({img, title,description,price}) {

    const imgDiv = {
        height: "195px"
    }
    const imgStyle = {
        objectFit: "contain",
        height: "100%",
        width: "100%"
    }

    return (
        <Card className={"border-0 shadow-sm h-100"}>
            <div style={imgDiv}>
                <Card.Img style={imgStyle} variant="top" src={img} alt={"picture"} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className={"border-0 bg-transparent"}>
                <p className="card-text">
                    <span className="text-primary fw-bold">${(
                        price -
                        price * 0.2
                    ).toFixed(2)}</span> | <del>${price.toFixed(
                    2
                    )}</del>
                </p>
                <div  className="d-flex justify-content-between">
                    <Button variant="primary"><i className="bi bi-cart-plus"></i> Add Card</Button>
                    <Button variant="success"><i className="bi bi-bag"></i> Buy Now</Button>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default Product;