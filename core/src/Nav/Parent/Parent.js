import React, { Component } from "react";

import { Node } from "../Node";

import styles from "./Parent.less";
export class Parent extends Component {
  state = {
    active: false,
    closed: []
  };
  render() {
    return (
      <article
        onMouseEnter={() => {
          this.setState({ active: true });
        }}
        onMouseLeave={() => {
          this.setState({ active: false });
        }}
        className={`${styles.Parent} ${this.state.active && styles.active}`}
      >
        {/* if the item has a title, render it out */}
        {this.props.title && (
          <span className={styles.title}>
            <h2>
              <i className={`fa fa-${this.props.icon} ${styles.titleIcon}`} />{" "}
              {this.props.title}
            </h2>
            {Boolean(this.props.children.length) && (
              <i
                className={
                  this.state.closed.includes(this.props.title)
                    ? "fa fa-caret-left"
                    : "fa fa-caret-down"
                }
                onClick={() => this.handleOpen(this.props.title)}
              />
            )}
          </span>
        )}
        <ul>
          {!this.state.closed.includes(this.props.title) &&
            this.props.children.map(
              child =>
                child.children ? (
                  // if the child has children
                  // render the child and then it's children
                  <React.Fragment key={child.path}>
                    <Node
                      {...child}
                      selected={this.props.selected}
                      active={this.state.active}
                      closed={this.state.closed.includes(child.path)}
                      handleOpen={this.handleOpen}
                    />
                    {/* allow for a closed item not to render it's children */}
                    {!this.state.closed.includes(child.path) && (
                      <Parent
                        {...child}
                        selected={this.props.selected}
                        active={this.state.active}
                      />
                    )}
                  </React.Fragment>
                ) : (
                  <Node
                    {...child}
                    selected={this.props.selected}
                    active={this.state.active}
                    closed={this.state.closed.includes(child.path)}
                    handleOpen={this.handleOpen}
                    key={child.path}
                  />
                )
            )}
        </ul>
      </article>
    );
  }
  handleOpen = path => {
    // add or remove path from closed state array
    let replaceClosed = [...this.state.closed];
    if (this.state.closed.includes(path)) {
      replaceClosed = this.state.closed.reduce((acc, e) => {
        if (e !== path) {
          acc.push(e);
        }
        return acc;
      }, []);
    } else {
      replaceClosed.push(path);
    }
    return this.setState({ closed: replaceClosed });
  };
}
