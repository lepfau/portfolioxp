import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import First from "./pages/First";
import LangProvider from "./components/Context/LangProvider"
import errorcomponent from "./components/errorcomponent";


function App() {
  return (
    <div className="App">
    <LangProvider>
    <HashRouter exact basename='/' hashType="noslash">
      <Switch>
    <Route exact path="/" component={First} />
    <Route component={errorcomponent}/>
  
    </Switch>
    </HashRouter>
    </LangProvider>
    </div>
  );
}

export default App;
