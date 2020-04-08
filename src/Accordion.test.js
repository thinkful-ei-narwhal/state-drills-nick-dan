// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json'
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  it('renders empty li', () => {
    const tree = renderer.create(<Accordion />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
