import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import PhotoList from "./Components/PhotoList";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Welcome to React Gallery</h1>
          <Nav />
          <Switch>
            <Route exact path="/" component={PhotoList} />
            <Route path="/search/:query" component={PhotoList} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
