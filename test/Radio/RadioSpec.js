import { mount, shallow } from 'enzyme';
import Radio from '../../src/components/atoms/Radio';
import React from 'react';

describe('<Radio />', () => {
    it('renders a radio input', () => {
        const wrapper = mount(<Radio name="fakeRadio" id="fakeRadio1" label="Check me" />);
        expect(wrapper.find('label.vdp-control--radio').exists()).toBe(true);
    });

    it('renders a radio input that is checked', () => {
        const wrapper = shallow(<Radio name="fakeRadio" id="fakeRadio2" label="Check me" checked onChange={() => {}} />);
        expect(wrapper.find('#fakeRadio2').prop('checked')).toBe(true);
    });

    it('renders a radio input with custom attributes', () => {
        const wrapper = shallow(<Radio name="fakeRadio" id="fakeRadio2" label="Check me" className="hasFakeClass" />);
        expect(wrapper.find('label.vdp-control--radio').hasClass('hasFakeClass')).toBe(true);
    });

    it('calls onChange when the checkbox is clicked', () => {
        const onChange = jest.fn();
        const wrapper = shallow(<Radio name="fakeRadio" id="fakeRadio2" label="Check me" className="hasFakeClass" onChange={onChange} />);
        const radio = wrapper.find('#fakeRadio2');
        radio.simulate('change');
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
