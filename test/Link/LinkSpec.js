import React, { useRef } from 'react';
import { shallow, mount } from 'enzyme';
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

    it('should allow for no href prop', () => {
        const wrapper = shallow(<Link id="myLink" />);
        expect(wrapper.find('#myLink').props().href).toBe(undefined);
    });

    it('should forward ref to anchor tag', () => {
        let ref;
        const TestRef = () => {
            ref = useRef();
            return <Link ref={ref} id="myLink" />;
        };

        mount(<TestRef />);
        expect(ref.current).toBeTruthy();
    });
});
