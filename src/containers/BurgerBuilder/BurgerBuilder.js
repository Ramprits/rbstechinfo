import React, { Component, Fragment } from "react";

export default class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
        <div className={this.props.className}>Burger</div>
        <div className={this.props.className}> Build Controls</div>
      </Fragment>
    );
  }
}
