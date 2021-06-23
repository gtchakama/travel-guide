import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="myApp">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
