import './components/Navbar'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Product from "./components/Product";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from "bootstrap/js/src/dom/data";


function App() {

    let rowProducts = []
    const products = fetch('https://restcountries.com/v3.1/name/cambodia')
                                    .then(res => res.json())
                                    .then(data => rowProducts=data)
    console.log(rowProducts)
    for (let i = 0; i < 12; i++) {
        rowProducts.push(<Col key={`col-${i}`}>
            <Product
                img={"https://th.bing.com/th/id/OIP.NL8o5X9Gzi1Ukxgn_nFYjwHaHa?pid=ImgDet&rs=1"}
                title={"Coca-Cola Coke 500 Ml"}
                description={"Some quick example text to build on the card title and make up the bulk of the card's content."}
            />
        </Col>)
    }

    return (
        <div className="App">
            <Navbar/>
            <Main>
                <section className={"my-5"}>
                    <Row xs={1} sm={2} md={3} lg={4} className={"g-2 g-lg-3"}>
                        {rowProducts}
                    </Row>
                </section>
                <Feedback />
            </Main>
            <Footer/>
        </div>
    );
}

export default App;
