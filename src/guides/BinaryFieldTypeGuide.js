import React, { Component } from 'react'

import '../../core/src/BinaryFieldType/BinaryFieldType.less'
import { BinaryFieldType } from '../../core/src/BinaryFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'

export class BinaryFieldTypeGuide extends Component {
  render() {
    // defaults
    return (
      <React.Fragment>
        <p>Binary Field Type for manager app</p>
        <p>Props: label, trueValue, falseValue, defaultChecked, disabled</p>
        <br />
        <BinaryFieldType label="Default Values" />
        <br />
        <BinaryFieldType
          label="Custom Values"
          trueValue="Affirmative"
          falseValue="Negative"
        />
        <br />
        <BinaryFieldType
          label="Default to true"
          defaultChecked={true}
          trueValue="Fast"
          falseValue="Slow"
        />
        <br />
        <BinaryFieldType
          disabled
          label="Disabled"
          trueValue="Fast"
          falseValue="Slow"
        />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="450px"
            code={`
<BinaryFieldType label="Default Values" />

<BinaryFieldType
  label="Custom Values"
  trueValue="Affirmative"
  falseValue="Negative"
/>

<BinaryFieldType
  label="Default to true"
  defaultChecked={true}
  trueValue="Fast"
  falseValue="Slow"
/>

<BinaryFieldType
  disabled
  label="Disabled"
  trueValue="Fast"
  falseValue="Slow"
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/aea22e948944049f09a91844e8e7644e/raw/df0336d1ac249f27da496d96395d0fb54c565ea1/BinaryFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
