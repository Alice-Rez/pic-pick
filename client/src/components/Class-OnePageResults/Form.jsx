import React, { Component } from "react";
import axios from "axios";
import { apiKey } from "../config.js";

export default class Form extends Component {
  state = {
    query: "",
  };

  getValue = (e) => {
    this.setState({ query: e.target.value });
  };

  searchImages = (e) => {
    e.preventDefault();
    this.props.nullPhotos();
    axios
      .get("https://api.unsplash.com/search/collections", {
        params: {
          client_id: apiKey,
          query: this.state.query,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.results.length > 0) {
          res.data.results.map((item) => {
            return this.props.getPhotos(item);
          });
        } else {
          this.props.showErr("noResults");
        }
      })
      .catch((err) => this.props.showErr("APINotWork"));
  };
  render() {
    return (
      <form action="" className="form-inline" onSubmit={this.searchImages}>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control form-control-lg search"
            id="search"
            name="search"
            onInput={this.getValue}
          />
        </div>
        <button type="submit" className="btn main mb-2 btn-lg">
          Search
        </button>
      </form>
    );
  }
}
