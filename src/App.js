import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./Components/layout";
import Contacts from "./Pages/Contacts";
import Posts from "./Pages/Posts";
import Galary from "./Pages/Photos";
import Home from "./Pages/Home";
import ContactMsg from "./Pages/ContactMsg";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/contacts/:id">
              <ContactMsg />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/photos">
              <Galary />
            </Route>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
