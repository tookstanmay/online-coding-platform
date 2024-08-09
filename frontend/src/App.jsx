import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Holder } from "./components/Holder";
import Footer from "./components/Footer";

function App() {

  return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            {/* <Route key={"about"} exact path="/about">
            </Route> */}
            <Holder />
          </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
