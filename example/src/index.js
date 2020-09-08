import React from 'react';
import ReactDOM from 'react-dom';
import { Amazon } from './asset/brands.svg'

class App extends React.Component {
  render(){
    return(
      <div>
        <div>Hello World</div>
        <Amazon />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))