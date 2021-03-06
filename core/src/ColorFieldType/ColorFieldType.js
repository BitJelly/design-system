import React, { Component } from "react";
import cx from "classnames";
import { Input } from "../Input";
import styles from "./ColorFieldType.less";

export class ColorFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "#ffffff"
    };
  }
  render() {
    return (
      <label className={styles.ColorFieldType}>
        <span className={styles.ColorFieldTypeLabel}>{this.props.label}</span>
        <div className={styles.ColorFieldTypeInput}>
          <i className={cx(styles.Icon, "fa fa-paint-brush")} />
          <Input
            type="color"
            onChange={this.onChange}
            value={this.state.value}
          />
        </div>
      </label>
    );
  }
  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        evt.target.value,
        this.props.datatype
      );
    }
    this.setState({
      value: evt.target.value
    });
  };
}
