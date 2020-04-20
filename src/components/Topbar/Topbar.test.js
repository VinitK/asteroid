import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Topbar from './Topbar';

describe("Topbar Testing with Jest", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Topbar />);

    });
    it('Topbar Component Snapshot', () => {
        const wrapper = shallow(<Topbar />);
        expect(wrapper).toMatchSnapshot();
    })
});
