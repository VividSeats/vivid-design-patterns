import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../../src/components/molecules/Modal';

const wait = async (time = 0) => new Promise(res => setTimeout(() => res(), time));

window.matchMedia = () => ({
    addListener: () => {},
    removeListener: () => {}
});

describe('<Modal />', () => {
    it('renders a div with .vdp-react-modal', async () => {
        const wrapper = shallow(<Modal isOpen />);
        await wait(300);
        expect(wrapper.exists('.vdp-react-modal')).toBe(true);
        await wait(600);
        expect(wrapper.find('.vdp-react-modal__container').prop('style').opacity.value).toBeGreaterThan(0.95);
        expect(wrapper.exists('.vdp-react-modal__container')).toBe(true);
    });

    it('does not render a div with .vdp-react-modal when isOpen = false', async () => {
        const wrapper = shallow(<Modal isOpen={false} />);
        await wait(200);
        expect(wrapper.exists('.vdp-react-modal')).toBe(false);
        expect(wrapper.exists('.vdp-react-modal___container')).toBe(false);
    });

    it('does render backdrop when `isOpen` = true', async () => {
        const wrapper = mount(<Modal isOpen />);
        await wait(200);
        expect(wrapper.exists('.vdp-react-backdrop')).toBe(true);
    });

    it('does not render backdrop when `disableBackdrop` = true', async () => {
        const wrapper = mount(<Modal isOpen disableBackdrop />);
        await wait(200);
        expect(wrapper.exists('.vdp-react-backdrop')).toBe(false);
    });
});
