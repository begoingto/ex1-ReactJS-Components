import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function Feedback() {
    return (
        <section className={"my-5"}>
            <div className="p-5 text-center bg-body-tertiary rounded-3 shadow-sm">
                <h1 className="text-body-emphasis fs-1"><i className="bi bi-rss"></i></h1>
                <h1 className="text-body-emphasis">Customer Feedback</h1>
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                    Thank you for taking time to provide feedback. We appreciate hearing from you and will reveiw you comment carefuly.
                </p>
                <Form className={"text-start"}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Would you recommend it to your friends and colleagues?</Form.Label>
                        <br/>
                        <Form.Check type="radio" inline label="Yes" aria-label="radio 1" />
                        <Form.Check type="radio" inline label="No" aria-label="radio 2" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Do you have any suggestion to improve our product and service?</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder={"Write your through here..."} />
                    </Form.Group>
                    <Button variant={"success"} type={"submit"} className={"px-4"}><i className="bi bi-send"></i> Send</Button>
                </Form>
            </div>
        </section>
    );
}

export default Feedback;
