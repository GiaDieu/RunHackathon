import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeechToText from "./components/SpeechToText";
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/test" component={SpeechToText}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
