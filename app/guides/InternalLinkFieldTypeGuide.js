import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { InternalLinkFieldType } from '@zesty-io/core/dist/InternalLinkFieldType'

export class InternalLinkFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          Internal link is a dropdown listing related items to display a link
        </p>
        <InternalLinkFieldType />

        <CodeCard header="Usage" height={50} open>
          {`<InternalLinkFieldType />`}
        </CodeCard>

        <CodeCard header="Code" height={350}>
          {`export class InternalLinkFieldType extends Component {
  state = {
    selectedOption: this.props.options[0],
    options: this.props.options
  };
  static defaultProps = {
    options: [
      {
        text: "there were no options passed to <Select>",
        value: "no options passed to select"
      }
    ],
    searchLength: 50
  };
  selectOption = evt => {
    if (this.props.callback) {
      this.props.callback(JSON.parse(evt.currentTarget.dataset.value).value);
    }
    this.setState({
      selectedOption: JSON.parse(evt.currentTarget.dataset.value)
    });
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <article>
        <div>
          <label>{this.props.label}</label>
        </div>
        <Select
          onSelect={this.selectOption}
          selection={{
            value: JSON.stringify(selectedOption),
            text: selectedOption.text
          }}
        >
          {this.state.options.map((opt, i) => {
            return (
              <Option key={i} value={JSON.stringify(opt)} text={opt.text} />
            );
          })}
        </Select>
      </article>
    );
  }
}`}
        </CodeCard>
      </React.Fragment>
    )
  }
}
