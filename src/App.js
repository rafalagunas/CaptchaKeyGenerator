import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//Hola
class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          class="g-recaptcha"
          data-sitekey="6LdsnG4UAAAAALHgSa-1yPJ16GPbP2xGCl-wT30J"
        />
      </div>
    );
  }
}

export default App;
