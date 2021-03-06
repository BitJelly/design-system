import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import styles from "./DateTimeFieldType.less";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'

export class DateTimeFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }
  componentDidMount() {
    if (this.props.value) {
      this.setState({
        date: moment(this.props.value)
      });
    }
  }
  onChange = date => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        moment(date).format(),
        this.props.datatype
      );
    }
    this.setState({
      date: date
    });
  };
  render() {
    return (
      <article className={styles.DateFieldType}>
        <div className={styles.DateFieldTypeLabel}>
          <label>{this.props.label}</label>
        </div>
        <DatePicker
          {...this.props}
          onChange={this.onChange}
          selected={this.state.date}
          showTimeSelect
          dateFormat={this.props.dateFormat || "LLL"}
          timeFormat={this.props.timeFormat || "HH:mm"}
          timeIntervals={this.props.timeIntervals || 15}
        />
      </article>
    );
  }
}
