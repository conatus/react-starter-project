import '../css/main.css';

import React from 'react';
import { render } from 'react-dom';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>React works</div>);
  }
}

render(<Main/>, document.getElementById('main'));
