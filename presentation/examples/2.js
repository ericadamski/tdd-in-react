import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
