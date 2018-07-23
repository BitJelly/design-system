import React, { Component } from "react";

import { Input } from "../Input";

import styles from "./NumberFieldType.less";
export class NumberFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInput: ""
    };
  }
  render() {
    const { numberInput } = this.state;
    return (
      <article
        className={`${styles.NumberFieldType} ${
          numberInput.length > this.props.charCount ? styles.Error : ""
        }`}
      >
        <div className={styles.NumberFieldTypeLabel}>
          <label>{this.props.label}</label>
          <span>
            {numberInput.length}/{this.props.charCount}
          </span>
        </div>
        <Input type="number" onChange={this.onChange} value={numberInput} />
      </article>
    );
  }
  onChange = evt => {
    this.setState({
      numberInput: evt.target.value
    });
  };
}