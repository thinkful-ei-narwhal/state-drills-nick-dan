import React from 'react';

export default class Bombs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count+=1
      })
      
    }, 1000)
  }
  componentWillUnmount() {
    if (this.state.count >= 8) {
    clearInterval(this.interval)
    }
  }

  // event handler

  render() {
    if (this.state.count >= 8) {
      return (
        <div>
          <p>BOOM!!!!!</p>
        </div>
      );
    } if (this.state.count % 2 === 0) {
      return (
        <div>
          <p>tick</p>
        </div>
      );
    } if (this.state.count % 2 !== 0) {
      return (
        <div>
          <p>tock</p>
        </div>
      );
    }
  }
}