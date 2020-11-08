import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeechToText from "./components/SpeechToText";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Category from "./components/Category";
import "semantic-ui-css/semantic.min.css";

import Papa from "papaparse";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./API/junction.csv");
      const reader = response.body.getReader();
      const rawData = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(rawData.value);
      const fetchedData = Papa.parse(csv, { header: true });
      const rows = fetchedData.data;
      setData(rows);
    };
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/assistant" component={SpeechToText}></Route>
          <Route path="/home" component={Home} data={data}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/category" component={Category}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
