import React from 'react';
import NotFound from './NotFound';
import { shallow } from 'enzyme';

describe('NotFound Tests', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NotFound />);
    });
    it('NotFound Component Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})