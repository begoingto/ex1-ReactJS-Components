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
import { useState, useEffect } from 'react';
import Placeholder from "./components/Placeholder";


function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    let rowProducts = []
    let placeholders=[]

    for (let i = 0; i < data.length; i++) {
        rowProducts.push(<Col key={`col-${i}`}>
            <Product
                img={data[i].image}
                title={data[i].title}
                price={data[i].price}
                description={data[i].description.substr(1,60)+"..."}
            />
        </Col>)
    }

    for (let j=0;j<20;j++){
        placeholders.push(<Col key={`col-${j}`}>
            <Placeholder />
        </Col>)
    }

    return (
        <div className="App">
            <Navbar/>
            <Main>
                <section className={"my-5"}>
                    <Row xs={1} sm={2} md={3} lg={4} className={"g-2 g-lg-3"}>
                        { data.length > 0 ? rowProducts : placeholders}
                    </Row>
                </section>
                <Feedback />
            </Main>
            <Footer/>
        </div>
    );
}

export default App;
