import React, { Component } from "react";

export default class Err extends Component {
  render() {
    console.log(this.props.error);
    return (
      <div className="alert alert-danger m-3">
        {this.props.error.noResults
          ? "Result does not exist!"
          : "We are terribly sorry, but the service is out of order :("}
      </div>
    );
  }
}
