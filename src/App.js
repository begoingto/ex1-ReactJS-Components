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

    const limit = 20;

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data));
        fetch('https://api.escuelajs.co/api/v1/products?limit='+ limit +'&offset=1')
            .then(response => response.json())
            .then(data => setData2(data));
    }, []);

    let rowProducts = []
    let placeholders=[]

    for (let i = 0; i < data.length; i++) {
        rowProducts.push(<Col key={`col-${i}`}>
            <Product
                img={data[i].image}
                title={data[i].title.substr(1,50)+"..."}
                price={data[i].price}
                description={data[i].description.substr(1,60)+"..."}
            />
        </Col>)
    }

    for (let j=0;j<limit;j++){
        placeholders.push(<Col key={`col-${j}`}>
            <Placeholder />
        </Col>)
    }

    return (
        <div className="App">
            <Navbar/>
            <Main>
                <section className={"my-5"}>
                    <h1 className={"text-center my-3"}>Product API <code>escuelajs</code></h1>
                    <Row xs={1} sm={2} md={3} lg={4} className={"g-2 g-lg-3"}>
                        {data2.length >  0 ? data2.map((pro,index)=> {
                            return <Col key={`col-${index}`}>
                                <Product
                                    img={pro.images[pro.images.length-1]}
                                    fit={false}
                                    title={pro.title}
                                    price={pro.price}
                                    description={pro.description.substr(1,60)+"..."}
                                />
                            </Col>
                        }) : placeholders }
                    </Row>
                </section>

                <hr/>

                <section className={"my-5"}>
                    <h1 className={"text-center my-3"}>Product API <code>fakestoreapi</code></h1>
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
