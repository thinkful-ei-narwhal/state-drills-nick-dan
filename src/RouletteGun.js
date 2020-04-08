import React from 'react';

export default class RouletteGun extends React.Component {
  static defaultProps = { bulletInChamber: 8 };

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }



  clickHandler = e => {
    this.setState({ spinningTheChamber: true });
    this.timeout = setTimeout(() => {
      const chamberNum = Math.ceil(Math.random() * 8);
      this.setState({ chamber: chamberNum, spinningTheChamber: false });
    }, 2000);
  };

  renderP() {
    const bulletInChamber = this.props.bulletInChamber
    if (this.state.spinningTheChamber) {
      return `spinning the chamber and pulling the trigger! ...`;
    }
    else if (this.state.chamber === bulletInChamber) {
      return `BANG!!!`;
    }
    else {
      return `you're safe!!`;
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Pull the trigger!</button>
        <p>{this.renderP()}</p>
      </div>
    );
  }
}

