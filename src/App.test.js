import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe("App Testing with Jest", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);

  });
  it('App Component Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
