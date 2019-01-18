import React from 'react';
import { shallow, mount } from 'enzyme';
import Fab from '../../src/components/atoms/Fab';

/* eslint react/jsx-filename-extension: 0 */

describe('<Fab />', () => {
    it('renders', () => {
        const wrapper = shallow(<Fab />);
        expect(wrapper.hasClass('vp-fab')).toBe(true);
    });
});
