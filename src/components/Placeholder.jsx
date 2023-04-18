import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


function PlaceHolder() {
    const imgStyle = {
        height: "200px"
    }
    return (
        <Card className={"border-0 shadow-sm h-100"}>
            <Placeholder style={imgStyle} />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>

            </Card.Body>
            <Card.Footer className={"border-0 bg-transparent"}>
                <p className="card-text">
                    <Placeholder xs={2} /> | <Placeholder xs={2} />
                </p>
                <div className="d-flex justify-content-between">
                    <Placeholder.Button size="sm" variant="primary" xs={4} />
                    <Placeholder.Button size="sm" variant="success" xs={4} />
                </div>
            </Card.Footer>
        </Card>
    );
}

export default PlaceHolder;