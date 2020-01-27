import React from 'react';
import { mount } from 'enzyme';
import Image from '../../src/components/atoms/Image';

/* eslint no-constant-condition: 0 */

describe('<Image />', () => {
    it('renders an Image with specified src', () => {
        const src = 'www.rc.com';
        const wrapper = mount(<Image src={src} alt={'image'} />);
        expect(wrapper.find('img').prop('src')).toBe(src);
    });

    it('calls onError callbacks when image fails to load', () => {
        const onError = jest.fn();
        const src = 'www.rc.com';
        const wrapper = mount(<Image src={src} alt={'image'} onError={onError} />);
        wrapper.find('img').simulate('error');
        expect(onError).toBeCalled();
    });

    it('renders with fallback image when src image fails to load', () => {
        const fallback = 'fallback';
        const src = 'www.rc.com';
        const wrapper = mount(<Image src={src} alt={'image'} fallback={fallback} />);
        wrapper.find('img').simulate('error');
        expect(wrapper.find('img').prop('src')).toBe(fallback);
    });

    it('renders an Image with specified background image when loaded via css', () => {
        const src = 'www.rc.com';
        const wrapper = mount(<Image src={src} loadImageViaCss alt={'image'} />);
        expect(wrapper.find('img').prop('style').display).toBe('none');
        wrapper.find('img').simulate('load');
        expect(wrapper.find('div').prop('style').backgroundImage).toBe(`url(${src})`);
    });

    it('when loadImageViaCss is passed it, it renders a fallback Image when the source image failed to load', () => {
        const src = 'www.rc.com';
        const fallback = 'fallback';
        const wrapper = mount(<Image src={src} loadImageViaCss alt={'image'} fallback={fallback} />);
        expect(wrapper.find('img').prop('style').display).toBe('none');
        wrapper.find('img').simulate('error');
        expect(wrapper.find('div').prop('style').backgroundImage).toBe(`url(${fallback})`);
    });
});
