import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeechToText from "./components/SpeechToText";
import Home from "./components/Home";
import "semantic-ui-css/semantic.min.css";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/assistant" component={SpeechToText}></Route>
          <Route path="/home" component={Home}></Route>

          {/* Quan */}
          <Route path="/info-detail"></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
