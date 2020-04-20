import React from 'react';
import { shallow } from 'enzyme';
import Topbar from './Topbar';

describe("Topbar Testing with Jest", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Topbar />);

    });
    it('Topbar Component Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
