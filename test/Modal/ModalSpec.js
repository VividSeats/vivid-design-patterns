import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../../src/components/molecules/Modal';

const wait = async (time = 0) => new Promise(res => setTimeout(() => res(), time));

window.matchMedia = () => ({
    addListener: () => {},
    removeListener: () => {}
});

describe('<Modal />', () => {
    it('renders a div with .vdp-modal', async () => {
        const wrapper = shallow(<Modal isOpen />);
        await wait(300);
        expect(wrapper.exists('.vdp-modal')).toBe(true);
        await wait(600);
        expect(wrapper.find('.vdp-modal__container').prop('style').opacity.value).toBeGreaterThan(0.95);
        expect(wrapper.exists('.vdp-modal__container')).toBe(true);
    });

    it('does not render a div with .vdp-modal when isOpen = false', async () => {
        const wrapper = shallow(<Modal isOpen={false} />);
        await wait(200);
        expect(wrapper.exists('.vdp-modal')).toBe(false);
        expect(wrapper.exists('.vdp-modal___container')).toBe(false);
    });

    it('does render backdrop when `isOpen` = true', async () => {
        const wrapper = mount(<Modal isOpen />);
        await wait(200);
        expect(wrapper.exists('.vdp-backdrop')).toBe(true);
    });

    it('does not render backdrop when `disableBackdrop` = true', async () => {
        const wrapper = mount(<Modal isOpen disableBackdrop />);
        await wait(200);
        expect(wrapper.exists('.vdp-backdrop')).toBe(false);
    });
    it('calls onClickBackdrop when backdrop is clicked', async () => {
        const mockOnClose = jest.fn();
        const wrapper = mount(<Modal isOpen onClickBackdrop={mockOnClose} />);
        await wait(200);
        wrapper.find('aside.vdp-modal').simulate('click');
        expect(mockOnClose).toHaveBeenCalled();
    });
    it('renders its child static components', async () => {
        const wrapper = mount(
            <Modal isOpen>
                <Modal.Header> Hello </Modal.Header>
                <Modal.Body> Body </Modal.Body>
                <Modal.Footer>Footer</Modal.Footer>
            </Modal>
        );
        await wait(200);
        expect(wrapper.exists('.vdp-modal__body')).toBe(true);
        expect(wrapper.exists('.vdp-modal__footer')).toBe(true);
        expect(wrapper.exists('.vdp-modal__header')).toBe(true);
    });
});
