import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import portfolio from "./pages/portfolio/portfolio.js";
import contact from "./pages/contact/contact.js";
import about from "./pages/about/about.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  document.title = "Rachel Levy";

  return (
    <Router>
        <div>
          <Navbar/>
          <Wrapper>
            <Route exact path="/" component={about} />
            <Route exact path="/portfolio" component={portfolio} />
            <Route exact path="/contact" component={contact} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
  );
}

export default App;