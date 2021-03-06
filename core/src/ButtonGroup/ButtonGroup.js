import React from "react";
import styles from "./ButtonGroup.less";
import cx from "classnames";

export function ButtonGroup(props) {
  let opts = {
    className: cx(styles.ButtonGroup, props.className)
  };
  return (
    <div {...opts}>
      {React.Children.map(props.children, child => {
        if (child) {
          return React.cloneElement(child, {
            className: cx(styles.child, child.props.className)
          });
        }
      })}
    </div>
  );
}
