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

    it('renders an Image with specified background image when loaded via css', () => {
        const src = 'www.rc.com';
        const wrapper = mount(<Image src={src} loadImageViaCss alt={'image'} />);
        expect(wrapper.find('img').prop('style').display).toBe('none');
    });
});
