import React from "react";

export default function Button({ onClick }) {
  return <button onClick={this.props.onClick}>{this.props.children}</button>;
}
