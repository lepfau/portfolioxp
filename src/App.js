import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import First from "./pages/First";
import LangProvider from "./components/Context/LangProvider"

function App() {
  return (
    <LangProvider>
    <HashRouter basename='/'>
    <div className="App">
    <Route exact path="/" component={First} />

    </div>
    </HashRouter>
    </LangProvider>
  );
}

export default App;
