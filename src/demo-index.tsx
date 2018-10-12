import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ValueCurator } from './index'

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ValueCurator values={[1, 2, 3]}>
          {({ values }: any) => <div>{values.join(' ')}</div>}
        </ValueCurator>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
