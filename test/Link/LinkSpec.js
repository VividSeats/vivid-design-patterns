import React from 'react';
import { shallow } from 'enzyme';
import Link from '../../src/components/atoms/Link';

describe('<Link />', () => {
    const fakeHref = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    it('renders an <a> tag', () => {
        const wrapper = shallow(<Link href={fakeHref} />);
        expect(wrapper.find('a.vdp-type-link').exists()).toBe(true);
    });

    it('renders an <a> tag with custom attributes', () => {
        const wrapper = shallow(<Link href={fakeHref} id="myLink" />);
        expect(wrapper.find('#myLink').hasClass('vdp-type-link')).toBe(true);
    });

    it('handles onClick event', () => {
        const mockOnClick = jest.fn();
        const wrapper = shallow(<Link href={fakeHref} onClick={mockOnClick} />);
        wrapper.find('.vdp-type-link').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
