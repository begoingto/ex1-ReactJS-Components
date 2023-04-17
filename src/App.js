import './components/Navbar'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/Product";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Main>
                <Product />
                <Feedback />
            </Main>
            <Footer/>
        </div>
    );
}

export default App;
