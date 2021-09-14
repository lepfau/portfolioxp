import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path="/" component={Main} />
   

    </div>
    </BrowserRouter>
  );
}

export default App;
