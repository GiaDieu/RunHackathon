import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeechToText from "./components/SpeechToText";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Navbar from "./components/NavBar";
import "semantic-ui-css/semantic.min.css";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/assistant" component={SpeechToText}></Route>
          <Route path="/home" component={Home}></Route>

          {/* Quan */}
          <Route path="/info-detail" component={Detail}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
