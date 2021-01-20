import React, { Component } from "react";
import Header from "../Header";
import Form from "./Form";
import ImageContainer from "./ImageContainer";
import Err from "../Err";
import Footer from "../Footer";

export default class App extends Component {
  state = {
    query: "cats",
    pageNumber: 1,
    photos: [],
    error: { noResults: false, APINotWork: false },
  };

  changeStateGeneral = (key, value) => {
    this.setState({ ...this.state, [key]: value });
  };

  getPhotos = (data) => {
    this.setState({ photos: [...this.state.photos, data] });
  };
  showErr = (key) => {
    this.setState({ error: { ...this.state.error, [key]: true } });
  };
  nullPhotos = () => {
    this.setState({ photos: [] });
  };
  catch;
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="px-5 pb-5 d-flex align-items-center flex-column">
          <p className="lead my-5">
            Find your favorite photos collection from{" "}
            <a href="https://unsplash.com/">Unsplash.com</a>
          </p>
          <Form
            getPhotos={this.getPhotos}
            showErr={this.showErr}
            nullPhotos={this.nullPhotos}
          />
          {this.state.error.noResult || this.state.error.APINotWork ? (
            <Err error={this.state.error} />
          ) : (
            <ImageContainer photos={this.state.photos} />
          )}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
