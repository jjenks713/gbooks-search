import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import NavTabs from "./components/Nav";




function App() {


  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Books} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
};


export default App;
