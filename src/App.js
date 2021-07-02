import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DemoRedux from "./components/DemoRedux";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/Navbar";
import Home from "./components/Home";
import BottomFooter from "./components/Footer/BottomFooter";
import About from "./components/Pages/About";
import Shop from "./components/Pages/Shop";
import Contact from "./components/Pages/Contact";
import Cart from "./components/Pages/Cart";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/demoredux" component={DemoRedux} />
        <Footer />
        <BottomFooter />
      </Router>
    </>
  );
}

export default App;
