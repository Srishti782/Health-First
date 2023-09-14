import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Navbar";
import Success from "./Components/Success"
import Failure from "./Components/Failure";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>         
       <BrowserRouter>
        <Routes>
          <Route path="/" element = { <> <Header />  <Home /> <Footer /> </>} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/registered" element = {<h1>You are successfully registered</h1>} />
          <Route path="/success" element = {<Success />} />
          <Route path="/failure" element = {<Failure />} />
        </Routes>
       </BrowserRouter>
          
    </>
  );
}

export default App;
