import React from 'react';
import ReactDOM from 'react-dom';
import { Amazon, Angular } from './asset/brands.svg'

class App extends React.Component {
  render(){
    return(
      <div>
        <Amazon style={{ width: 100, height: 100 }} />
        <Angular style={{ width: 100, height: 100 }} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))