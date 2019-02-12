import { mount, shallow } from 'enzyme';
import Radio from '../../src/components/atoms/Radio';
import React from 'react';

describe('<Radio />', () => {
    it('renders a radio input', () => {
        const wrapper = mount(<Radio name="fakeRadio" id="fakeRadio1" />);
        expect(wrapper.find('label.vp-control--radio').exists()).toBe(true);
    });

    it('renders a radio input that is checked', () => {
        const wrapper = shallow(<Radio name="fakeRadio" id="fakeRadio2" checked onChange={() => {}} />);
        expect(wrapper.find('#fakeRadio2').prop('checked')).toBe(true);
    });

    it('renders a radio input with custom attributes', () => {
        const wrapper = shallow(<Radio name="fakeRadio" id="fakeRadio2" className="hasFakeClass" />);
        expect(wrapper.find('label.vp-control--radio').hasClass('hasFakeClass')).toBe(true);
    });
});
