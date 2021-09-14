import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import First from "./pages/First";

function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
    <Route exact path="/" component={First} />

    </div>
    </HashRouter>
  );
}

export default App;
