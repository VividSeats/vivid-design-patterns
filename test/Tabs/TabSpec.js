import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../../src/components/atoms/Tab';

describe('<Tab />', () => {
    const fakeHref = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    it('renders an <li> tag', () => {
        const wrapper = shallow(<Tab href={fakeHref} />);
        expect(wrapper.find('li.vdp-tab').exists()).toBe(true);
    });

    it('renders an <li> tag with custom attributes', () => {
        const wrapper = shallow(<Tab href={fakeHref} id="myTab" />);
        expect(wrapper.find('#myTab').hasClass('vdp-tab')).toBe(true);
    });

    it('handles onClick event', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(<Tab href={fakeHref} onClick={mockOnClick} />);
        wrapper.find('.vdp-tab').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('handles onMouseEnter event', () => {
        const mockOnMouseEnter = jest.fn();
        const wrapper = shallow(<Tab href={fakeHref} onMouseEnter={mockOnMouseEnter} />);
        wrapper.find('.vdp-tab').simulate('mouseenter');
        expect(mockOnMouseEnter).toHaveBeenCalledTimes(1);
    });

    it('handles onMouseLeave event', () => {
        const mockOnMouseLeave = jest.fn();
        const wrapper = shallow(<Tab href={fakeHref} onMouseLeave={mockOnMouseLeave} />);
        wrapper.find('.vdp-tab').simulate('mouseleave');
        expect(mockOnMouseLeave).toHaveBeenCalledTimes(1);
    });
});
