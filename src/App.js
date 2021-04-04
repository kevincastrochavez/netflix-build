import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen/HomeScreen";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
