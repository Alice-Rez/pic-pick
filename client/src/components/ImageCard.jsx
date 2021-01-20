import React, { Component } from "react";

export default class ImageCard extends Component {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.info.cover_photo.urls.regular}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="title-wrapper">
            <h5 className="card-title">
              {this.props.info.cover_photo.alt_description
                ? this.props.info.cover_photo.alt_description
                : this.props.info.title}
            </h5>
            <div className="likes">
              <span className="heart">&#9829;</span>{" "}
              {this.props.info.cover_photo.likes}
            </div>
          </div>
          <h6 className="card-subtitle mt-2 text-muted">
            {this.props.info.user.name}
          </h6>
          <div className="links mt-5">
            <a
              href={this.props.info.cover_photo.links.html}
              className="btn"
              target="blank"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    );
  }
}
