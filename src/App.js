import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen/HomeScreen";

import "./App.css";
import LoginScreen from "./pages/LoginScreen/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
