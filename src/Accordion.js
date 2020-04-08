import React from 'react';

export default class Accordion extends React.Component {
  static defaultProps = {
    sections: [
      { title: "Thing 1", content: "Lorem ipsum dolor sit amet." },
      { title: "Thing 2", content: "This should appear and the others go away." },
      { title: "Thing 3", content: "I said GO AWAY!" },
    ]
  };

  state = {
    pressed: null
  }

  handleClick = index => {
    this.setState({ pressed: index })
  };

  render() {
    const { sections } = this.props;
    const { pressed } = this.state;
    return (
      <ul className="container">
        {sections.map((section, index) => {
          return (<li key={index} >
            <button onClick={() => this.handleClick(index)}>{section.title}</button>
            {(pressed === index) && <p>{section.content}</p>}
          </li>)
        })}
      </ul>
    );
  }
}