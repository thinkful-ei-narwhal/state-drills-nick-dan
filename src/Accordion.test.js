import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';

describe(`Accordian Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty li', () => {
    const tree = renderer.create(<Accordion />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('The component renders no sections as active by default.', () => {
    const tree = renderer.create(<Accordion sections={[{ title: "Thing 1", content: "Lorem ipsum dolor sit amet." }]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('The component opens a clicked section.', () => {
    const wrapper = shallow(<Accordion />);
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('The component only opens the last section when multiple sections have been clicked.', () => {
    const wrapper = shallow(<Accordion />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
