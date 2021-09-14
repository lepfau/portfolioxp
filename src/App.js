import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <HashRouter basename='/'>
    <div className="App">
    <Route exact path="/" component={Main} />
   

    </div>
    </HashRouter>
  );
}

export default App;
