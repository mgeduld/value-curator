import * as React from 'react'
import { ValueCuratorProps } from '../index'

export class ValueCurator extends React.Component<any, any> {
  render() {
    const { values, children } = this.props
    const childrenWithProps = (children as Function)({
      values
    })
    return childrenWithProps
  }
}
