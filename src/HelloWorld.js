import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: ''
    }
  }

  changeState = (e,stringVal) => {
    this.setState({ who: stringVal });
  };

  render() {
    return (
      <div>
        <button onClick={e=> {this.changeState(e,'Hello,world')}}>world</button>
        <button onClick={e=> {this.changeState(e,'Hello, friend')}}>friend</button>
        <button onClick={e=> {this.changeState(e,'Hello, react')}}>react</button>
        <p>{this.state.who}</p>
      </div>
    );
  }
}

