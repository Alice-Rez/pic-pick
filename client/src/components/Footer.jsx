import React, { Component } from "react";
import logo from "../images/logo.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-center">
        <p>
          Photos provided by{" "}
          <a href="https://unsplash.com/developers">Unsplash API</a>
        </p>
        <p>
          &#169;2020 Made by{" "}
          <img className="logo" src={logo} alt="Alice Rez logo" /> Alice Rez
        </p>
      </footer>
    );
  }
}
