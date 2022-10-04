import React, { Component } from 'react';
import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';
import ExcelReader from './ExcelReader';

class Indexmain extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <ExcelReader/>
      </div>
    );
  }
}

render(<Indexmain />, document.getElementById('root'));
