import React, { Component } from "react";
import ImageCard from "../ImageCard";

export default class ImageContainer extends Component {
  render() {
    return (
      <section className="card-columns mt-5">
        {this.props.photos.map((item, index) => {
          return item.cover_photo ? (
            <ImageCard info={item} key={item.id} />
          ) : null;
        })}
      </section>
    );
  }
}
