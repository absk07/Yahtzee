import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords: ['', 'one', 'two', 'three', 'four', 'five', 'six']
  };
  handleClick = e => {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { locked, val, numWords, disabled, isRolling } = this.props;
    return (
      <i
        className={`Die fas fa-dice-${numWords[val]} fa-5x ${locked ? "Die-locked" : ""} ${isRolling ? "Die-rolling" : ""}`}
        onClick={this.handleClick}
        disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;
