import React from 'react';

export default class Accordion extends React.Component {
  static defaultProps = { sections: [
    {title: "Thing 1", content: "Lorem ipsum dolor sit amet."}, 
    {title: "Thing 2", content: "This should appear and the others go away."}, 
    {title: "Thing 3", content: "I said GO AWAY!"},
    ] 
  };

  state = {
    pressed: null
  }

  clickHandler = e => {
    const val = e.target.id
    this.setState({
      pressed: val
     }
  )};

  render() {
    const renderList = this.props.sections.map((ob, index) => {
      if (parseInt(this.state.pressed) === index) {
        return <li key={index}><button id={index} onClick={e=> {this.clickHandler(e)}}>{ob.title}</button><p>{ob.content}</p></li>;
    } else {
        return <li key={index}><button id={index} onClick={e=> {this.clickHandler(e)}}>{ob.title}</button></li>;
    }
  });
    return (
      <div>
        <ul>
          {renderList}
        </ul>
      </div>
    );
  }
}