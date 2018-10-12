import * as React from 'react'

export interface ValueCuratorProps extends React.Props<ValueCurator> {
  values: object[]
  keyField: string
}

declare class ValueCurator extends React.Component<ValueCuratorProps, any> {}

declare module 'value-curator' {

}

export default ValueCurator
